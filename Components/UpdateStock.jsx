import React, { useState } from "react";

export default function UpdateStock({ updateStock }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  return (
    <div
      className="section card"
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        border: "2px solid #2c3e50",
        borderRadius: "12px",
        background: "#f8f9fa",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "36px", // ✅ Bigger heading
          marginBottom: "20px",
          textAlign: "center",
          color: "#2c3e50",
        }}
      >
        Update Stock
      </h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        style={inputStyle}
      />

      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        placeholder="New Quantity"
        style={inputStyle}
      />

      <button
        onClick={() => updateStock(name, qty)}
        style={buttonStyle}
      >
        🔄 Update
      </button>
    </div>
  );
}

// ✅ Reusable input style
const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  fontSize: "20px", // ✅ Bigger text
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
};

// ✅ Button style
const buttonStyle = {
  width: "100%",
  padding: "16px",
  fontSize: "22px", // ✅ Bigger text
  fontWeight: "bold",
  background: "#2980b9",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "0.3s",
};
