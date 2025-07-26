const db = require("../db-pool");

const RedisController = require("./redis.controller");

class PinController {
  async creatPin(req, res) {
    const { title, description, image_url, tags } = req.body;
    const user_id = req.user.userId;

    if (!title || !description || !image_url || !tags || !user_id) {
      res.status(400).json({
        success: false,
        message: "The required data was not found. Invalid request!",
      });
    }

    try {
      const creatPin = await db.query(
        "INSERT INTO pin (title, description, image_url, tags, user_id) values ($1, $2, $3, $4, $5) RETURNING *",
        [title, description, image_url, tags, user_id]
      );

      if (!creatPin.rows[0]) {
        res.status(500).json({
          success: false,
          message: "Error adding new user to DB!",
        });
      }

      res.status(200).json({
        success: true,
        message: "New pin added successfully!",
        pin: creatPin.rows[0],
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  async userPin(req, res) {
    const user_id = req.user.userId;

    if (!user_id) {
      res.status(400).json({
        success: false,
        message: "user_id not specified!",
      });
    }
    console.log(user_id);
    try {
      let userPinRedis = await RedisController.getData("userPin");

      if (userPinRedis) {
        return res.status(200).json(userPinRedis);
      }

      const userPin = await db.query("SELECT * FROM pin WHERE user_id = $1", [
        user_id,
      ]);

      if (!userPin.rows[0]) {
        return res.status(500).json({
          success: false,
          message: "Pin not found!",
        });
      }

      await RedisController.setData("userPin", {
        success: true,
        message: "Pin successfully found!",
        pins: userPin.rows,
      });

      res.status(200).json({
        success: true,
        message: "Pin successfully found!",
        pins: userPin.rows,
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  async findPin(req, res) {
    const pin_id = req.params.pin_id;

    try {
      let findPinRedis = await RedisController.getData("findPin");

      if (findPinRedis) {
        return res.status(200).json(findPinRedis);
      }

      const findPin = await db.query("SELECT * FROM pin WHERE id = $1", [
        pin_id,
      ]);

      if (!findPin.rows[0]) {
        return res.status(500).json({
          success: false,
          message: "Pin not found!",
        });
      }

      await RedisController.setData("findPin", {
        success: true,
        message: "Pin successfully found!",
        pins: findPin.rows[0],
      });

      return res.status(200).json({
        success: true,
        message: "Pin successfully found!",
        pins: findPin.rows[0],
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  async updatePin(req, res) {
    const id = req.body?.id;
    const title = req.body?.title;
    const description = req.body?.description;
    const image_url = req.body?.image_url;
    const tags = req.body?.tags;
    const user_id = req.user?.userId;

    if (!title || !description || !image_url || !tags || !user_id || !id) {
      res.status(400).json({
        success: false,
        message: "The required data was not found. Invalid request!",
      });
    }

    try {
      const updatePin = await db.query(
        "UPDATE pin SET title = $1, description = $2, image_url = $3, tags = $4, user_id = $5 WHERE id = $6 RETURNING *",
        [title, description, image_url, tags, user_id, id]
      );

      if (!updatePin.rows[0]) {
        res.status(500).json({
          success: false,
          message: "Pin not upload!",
        });
      }

      res.status(200).json({
        success: true,
        message: "Pin successfully upload!",
        pins: updatePin.rows[0],
      });
    } catch {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  async deletePin(req, res) {
    const id = req.body?.id;

    if (!id) {
      res.status(400).json({
        success: false,
        message: "Pin id is not found. Invalid request!",
      });
    }

    try {
      const deletePin = await db.query("DELETE FROM pin WHERE id = $1", [id]);

      if (!deletePin.rowCount) {
        res.status(500).json({
          success: false,
          message: "Pin is not found!",
        });
      }

      if (!deletePin.rows[0]) {
        res.status(200).json({
          success: true,
          message: "Pin successfully deleted!",
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

module.exports = new PinController();
