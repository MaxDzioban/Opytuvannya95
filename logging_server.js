import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();
const app = express();
const PORT = 3006;

const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db, users, logs;

async function startServer() {
  try {
    await client.connect();
    db = client.db("web");
    users = db.collection("users");
    logs = db.collection("logs");

    // console.log("✅ MongoDB connected successfully");

    app.post("/api/register", async (req, res) => {
      const { username, password } = req.body;
      try {
        const exists = await users.findOne({ username });
        if (exists) {
          res.json({ success: false, error: "User already exists" });
        } else {
          await users.insertOne({ username, password, points: 0 });
          // console.log("✅ User created:", username);
          res.json({ success: true });
        }
      } catch (err) {
        // console.error("Register error:", err);
        res.status(500).json({ error: "Registration failed" });
      }
    });

    app.post("/api/login", async (req, res) => {
      const { username, password } = req.body;
      try {
        const user = await users.findOne({ username, password });
        res.json({ success: !!user });
      } catch (err) {
        // console.error("Login error:", err);
        res.status(500).json({ error: "Login failed" });
      }
    });

    app.post("/api/log", async (req, res) => {
      const { username, question, answer, score } = req.body;
      try {
        await logs.insertOne({
          username,
          question,
          answer,
          score,
          timestamp: new Date(),
        });
        res.json({ status: "ok" });
      } catch (err) {
        // console.error("Logging error:", err);
        res.status(500).json({ error: "Logging failed" });
      }
    });

    app.post("/api/points", async (req, res) => {
      const { username, delta } = req.body;
      if (typeof username !== "string" || typeof delta !== "number") {
        return res.status(400).json({ error: "Invalid input" });
      }
      try {
        const result = await users.updateOne(
          { username },
          { $inc: { points: delta } }
        );
        if (result.modifiedCount === 0) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json({ success: true, modifiedCount: result.modifiedCount });
      } catch (err) {
        // console.error("Update points error:", err);
        res.status(500).json({ error: "Points update failed" });
      }
    });

    app.get("/api/users", async (req, res) => {
      try {
        const allUsers = await users.find().toArray();
        res.json(allUsers);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
      }
    });

    // --- SERVER START ---
    app.listen(PORT, () => {
      // console.log(`🚀 Logging/auth server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    // console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

app.get("/api/user/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const user = await users.findOne({ username });

    if (user) {
      res.json({ points: user.points });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    // console.error("Fetch user error:", err);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

startServer();
