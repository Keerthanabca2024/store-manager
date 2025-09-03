import React from "react";

export default function Cart({ cart }) {
  return (
    <div
      className="section card"
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        border: "2px solid #2c3e50",
        borderRadius: "12px",
        background: "#f8f9fa",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "38px", // ✅ Bigger heading
          marginBottom: "20px",
          color: "#2c3e50",
        }}
      >
        🛒 Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ fontSize: "22px", color: "#555" }}>
          No items in cart.
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: "24px", // ✅ Bigger text
                padding: "12px",
                margin: "10px 0",
                background: "#ecf0f1",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
