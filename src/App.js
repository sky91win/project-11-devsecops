import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="app">
      <h1>🎬 Netflix Clone</h1>

      {!user ? (
        <div className="login-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Login</button>

          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <div className="welcome-box">
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      )}

      <div className="movies">
        <div className="movie">Stranger Things</div>
        <div className="movie">Money Heist</div>
        <div className="movie">Breaking Bad</div>
        <div className="movie">Dark</div>
      </div>
    </div>
  );
}

export default App;
