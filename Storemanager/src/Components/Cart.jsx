import React from "react";

export default function Cart({ cart, setCart, checkout, products, setProducts }) {
  // Group items by name with qty
  const groupedCart = cart.reduce((acc, item) => {
    const existing = acc.find((i) => i.name === item.name);
    if (existing) {
      existing.qty += 1;
    } else {
      acc.push({ ...item, qty: 1 });
    }
    return acc;
  }, []);

  // Increase quantity
  const increaseQty = (name) => {
    const productIndex = products.findIndex((p) => p.name === name);
    if (productIndex !== -1 && products[productIndex].qty > 0) {
      // Add item to cart
      setCart([...cart, products[productIndex]]);

      // Reduce stock in inventory
      const updatedProducts = [...products];
      updatedProducts[productIndex].qty -= 1;
      setProducts(updatedProducts);
    } else {
      alert("Out of stock!");
    }
  };

  // Decrease quantity
  const decreaseQty = (name) => {
    const index = cart.findIndex((item) => item.name === name);
    if (index !== -1) {
      // Remove one from cart
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);

      // Increase stock back in inventory
      const productIndex = products.findIndex((p) => p.name === name);
      if (productIndex !== -1) {
        const updatedProducts = [...products];
        updatedProducts[productIndex].qty += 1;
        setProducts(updatedProducts);
      }
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

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
      <h2 style={{ fontSize: "38px", marginBottom: "20px", color: "#2c3e50" }}>
        🛒 Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ fontSize: "22px", color: "#555" }}>No items in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {groupedCart.map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: "22px",
                  padding: "12px",
                  margin: "10px 0",
                  background: "#ecf0f1",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  {item.name} - ₹{item.price}
                </span>
                <div>
                  <button
                    onClick={() => decreaseQty(item.name)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "18px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ➖
                  </button>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {item.qty}
                  </span>
                  <button
                    onClick={() => increaseQty(item.name)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "18px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ➕
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginTop: "15px",
              color: "#27ae60",
            }}
          >
            Total: ₹{total}
          </p>

          <button
            onClick={checkout}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              fontSize: "18px",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#2980b9")}
            onMouseOut={(e) => (e.target.style.background = "#3498db")}
          >
            ✅ Checkout
          </button>
        </>
      )}
    </div>
  );
}
