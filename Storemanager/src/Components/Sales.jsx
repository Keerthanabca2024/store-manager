import React from "react";

export default function Sales({ sales }) {
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
          fontSize: "38px",
          marginBottom: "20px",
          color: "#2c3e50",
        }}
      >
        📊 Sales
      </h2>

      <p
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#27ae60",
        }}
      >
        Total Sales: ₹{sales}
      </p>
    </div>
  );
}
