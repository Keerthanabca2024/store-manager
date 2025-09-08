// Navbar.jsx
import React from "react";

export default function Navbar({ setActive }) {
  return (
    <nav
      style={{
        background: "#5b2dceff",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <button
        onClick={() => setActive("home")}
        style={buttonStyle}
      >
        Home
      </button>
      <button
        onClick={() => setActive("cart")}
        style={buttonStyle}
      >
        Cart
      </button>
      <button
        onClick={() => setActive("inventory")}
        style={buttonStyle}
      >
        Inventory
      </button>
      <button
        onClick={() => setActive("add")}
        style={buttonStyle}
      >
        Add Product
      </button>
      <button
        onClick={() => setActive("update")}
        style={buttonStyle}
      >
        Update Stock
      </button>
      <button
        onClick={() => setActive("sales")}
        style={buttonStyle}
      >
        Sales
      </button>
    </nav>
  );
}

// ✅ Common button style (big + bold)
const buttonStyle = {
  background: "white",
  color: "#0665c4ff",
  fontSize: "20px",   // ✅ bigger text
  fontWeight: "bold",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};
