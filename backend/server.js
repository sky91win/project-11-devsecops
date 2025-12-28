const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Fake users (in-memory)
const users = [
  { email: "admin@netflix.com", password: "admin123", name: "Admin User" },
  { email: "user@netflix.com", password: "user123", name: "Normal User" }
];

// ✅ LOGIN API (MATCHES INGRESS + FRONTEND)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    name: user.name,
    email: user.email
  });
});

// Health check
app.get("/health", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
