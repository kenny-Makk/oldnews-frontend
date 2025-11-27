import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // JWT を localStorage に保存（これがめっちゃ重要）
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      alert("Login successful!");
      console.log("Logged in:", data);

      // ログイン後 Home に飛ばす
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
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

      <button onClick={loginUser}>Login</button>
    </div>
  );
}