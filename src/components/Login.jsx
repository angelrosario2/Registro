import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    if (email === "test@example.com" && password === "123456") {
      setMessage("Inicio de sesión exitoso.");
    } else {
      setMessage("Credenciales incorrectas.");
    }
  };

  return (
    <div className="login-page">
     
      <header className="header">
        <div className="header-content">
          <h1 className="title">Pizzería Mamma Mía!</h1>
          <nav className="navbar">
            <a href="/" className="nav-button">Home</a>
            <a href="/login" className="nav-button">Login</a>
            <a href="/registro" className="nav-button">Register</a>
          </nav>
          <div className="cart">
            <button>Total: $25.00</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </main>

      <footer className="footer">
        <p>© 2021 - Pizzería Mamma Mía! - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Login;
