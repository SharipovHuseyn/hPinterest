const db = require("../db-pool");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const RedisController = require('./redis.controller');
const redis = new RedisController();

class UserController {
  async createUser(req, res) {
    const username = req.body?.username;
    const password = req.body?.password;
    const email = req.body?.email;

    if (!username || !email || !password) {
      res.status(400).json({
        success: false,
        message: "The required data was not found. Invalid request!",
      });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const createUser = await db.query(
        "INSERT INTO users (username, password, email) values ($1, $2, $3) RETURNING *",
        [username, hashedPassword, email]
      );
      if (!createUser.rows[0]) {
        res.status(500).json({
          success: false,
          message: "Error adding new user to DB!",
        });
      }

      const token = jwt.sign(
        {
          userId: createUser.rows[0].id,
          username: createUser.rows[0].username,
          email: createUser.rows[0].email,
          created_at: createUser.rows[0].created_at,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.status(200).json({
        success: true,
        message: "New user added successfully!",
        user: {
          id: createUser.rows[0].id,
          username: createUser.rows[0].username,
          email: createUser.rows[0].email,
        },
        token,
      });
    } catch (err) {
      console.log(err);

      if (err.code === "23505") {
        return res.status(400).json({
          success: false,
          message: "User with this email or username already exists",
        });
      }

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  async getUser(req, res) {
    try {
      redis.connect();
      let userData = await redis.getData("user");

      if (!userData) {
        userData = await redis.setData("user", req.user);
      }

      res.json({ user: userData });
    } catch (error) {
      console.error("Error in getUser:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async findUser(req, res) {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({
        success: false,
        message: "id not specified!",
      });
    }

    try {
      redis.connect();
      let findUserRedis = await redis.getData("findUser");

      if (findUserRedis) {
        return res.status(200).json(findUserRedis);
      }

      const findUser = await db.query("SELECT * FROM users WHERE id = $1", [
        id,
      ]);

      if (!findUser.rows[0]) {
        return res.status(500).json({
          success: false,
          message: "User not found!",
        });
      }

      await redis.setData("findUser", {
        success: true,
        message: "User successfully found!",
        user: {
          id: findUser.rows[0].id,
          username: findUser.rows[0].username,
          email: findUser.rows[0].email,
          created_at: findUser.rows[0].created_at,
        },
      })

      return res.status(200).json({
        success: true,
        message: "User successfully found!",
        user: {
          id: findUser.rows[0].id,
          username: findUser.rows[0].username,
          email: findUser.rows[0].email,
          created_at: findUser.rows[0].created_at,
        },
      })
    } catch (err) {
      console.log(err)

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  async updateUser(req, res) {
    const username = req.body?.username;
    const password = req.body?.password;
    const email = req.body?.email;
    const id = req.user?.userId;

    if (!username || !password || !email) {
      res.status(400).json({
        success: false,
        message: "Incorrect data!",
      });
    }

    try {
      const updateUser = await db.query(
        "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
        [username, email, password, id]
      );

      if (!updateUser.rows[0]) {
        res.status(500).json({
          success: false,
          message: "User not found!",
        });
      }

      const token = jwt.sign(
        {
          userId: updateUser.rows[0].id,
          username: updateUser.rows[0].username,
          email: updateUser.rows[0].email,
          created_at: updateUser.rows[0].created_at,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.status(200).json({
        success: true,
        message: "User successfully found!",
        user: {
          id: updateUser.rows[0].id,
          username: updateUser.rows[0].username,
          email: updateUser.rows[0].email,
          created_at: updateUser.rows[0].created_at,
        },
        token,
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  async deleteUser(req, res) {
    const id = req.user?.userId;
    console.log(id);
    if (!id) {
      res.status(400).json({
        success: false,
        message: "Incorrect data!",
      });
    }

    try {
      const deleteUser = await db.query("DELETE FROM users WHERE id = $1 ", [
        id,
      ]);

      if (!deleteUser.rows[0]) {
        res.status(200).json({
          success: true,
          message: "Successful deleted user!",
        });
      }
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new UserController();