import React, { useState } from "react";

export default function Sales() {
  const [sales, setSales] = useState(5000); // initial sales

  // Function to refresh sales (here random, but you can fetch from API instead)
  const refreshSales = () => {
    const newSales = Math.floor(Math.random() * 10000) + 1000; // demo: random value
    setSales(newSales);
  };

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

      <button
        onClick={refreshSales}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          background: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.background = "#2980b9")}
        onMouseOut={(e) => (e.target.style.background = "#3498db")}
      >
        🔄 Refresh Sales
      </button>
    </div>
  );
}
