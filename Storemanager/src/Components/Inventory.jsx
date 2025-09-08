import React, { useState } from "react";
import "./Inventory.css";

export default function Inventory({ products, addToCart, deleteProduct }) {
  const [search, setSearch] = useState("");

  // ✅ Filter products (with original index)
  const filteredProducts = products
    .map((p, idx) => ({ ...p, originalIndex: idx })) // keep original index
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="section card">
      <h2>Inventory</h2>

      {/* ✅ Search Box */}
      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="inventory-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.originalIndex}
              className={`product-card ${p.qty <= 5 ? "low-stock" : ""}`}
            >
              {/* ✅ Square Image */}
              {p.image ? (
                <div className="product-image">
                  <img src={p.image} alt={p.name} />
                </div>
              ) : (
                <div className="no-image">No Image</div>
              )}

              {/* Product Info */}
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>
                  <b>Category:</b> {p.category}
                </p>
                <p>
                  <b>Qty:</b> {p.qty}
                </p>
                <p>
                  <b>₹</b> {p.price}
                </p>

                {/* ✅ Stock Alert */}
                {p.qty <= 5 && (
                  <p className="stock-alert">⚠️ Low Stock! Reorder soon</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button
                  onClick={() => addToCart(p.originalIndex)}
                  className="btn add"
                >
                  Add
                </button>
                <button
                  onClick={() => deleteProduct(p.originalIndex)}
                  className="btn del"
                >
                  Del
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            ❌ No products found
          </p>
        )}
      </div>
    </div>
  );
}
