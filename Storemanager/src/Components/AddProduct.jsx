import React, { useState } from "react";

export default function AddProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(""); // new state for image URL

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
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "36px", // ✅ bigger heading
          marginBottom: "20px",
          textAlign: "center",
          color: "#2c3e50",
        }}
      >
        Add New Product
      </h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        style={inputStyle}
      />

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        style={inputStyle}
      />

      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        placeholder="Quantity"
        style={inputStyle}
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        style={inputStyle}
      />

      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        style={inputStyle}
      />

      <button
        onClick={() => {
          if (name && category && qty && price && image) {
            addProduct(name, category, qty, price, image);
            setName("");
            setCategory("");
            setQty("");
            setPrice("");
            setImage("");
          } else {
            alert("Please fill all fields");
          }
        }}
        style={buttonStyle}
      >
        ➕ Add Product
      </button>
    </div>
  );
}

// ✅ Reusable input style (big text)
const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  fontSize: "20px", // ✅ bigger text
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
};

// ✅ Button style
const buttonStyle = {
  width: "100%",
  padding: "16px",
  fontSize: "22px", // ✅ bigger text
  fontWeight: "bold",
  background: "#27ae60",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "0.3s",
};
