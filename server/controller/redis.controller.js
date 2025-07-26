const redis = require("redis");

class RedisController {
  constructor() {
    this.client = redis.createClient();
    this.client.on("error", (err) => console.error("Redis Client Error", err));
    this.connected = false;    
  }

  async connect() {
    if (this.connected) return;
    
    try {
      await this.client.connect();
      this.connected = true;
      console.log("Redis connected successfully");
    } catch (err) {
      console.error("Redis connection failed:", err);
      throw err;
    }
  }

  async disconnect() {
    if (this.connected) {
      await this.client.disconnect();
      this.connected = false;
    }
  }

  async setData(key, value, ttl = null) {
    if (!this.connected) {
      throw new Error("Redis client is not connected");
    }
    
    try {
      const stringValue = JSON.stringify(value);
      if (ttl) {
        await this.client.setEx(key, ttl, stringValue);
      } else {
        await this.client.set(key, stringValue);
      }
      return value;
    } catch (err) {
      console.error("Redis setData error:", err);
      throw err;
    }
  }

  async getData(key) {
    if (!this.connected) {
      throw new Error("Redis client is not connected");
    }
    
    try {
      const value = await this.client.get(key);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      console.error("Redis getData error:", err);
      throw err;
    }
  }
}

module.exports = RedisController;