import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import Inventory from "./components/Inventory.jsx";
import AddProduct from "./components/AddProduct.jsx";
import UpdateStock from "./components/UpdateStock.jsx";
import Sales from "./components/Sales.jsx";
import "./index.css";

export default function App() {
  const [active, setActive] = useState("home");

  // Products state saved in localStorage
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  // ✅ Sales record (starts with 0)
  const [sales, setSales] = useState(
    parseFloat(localStorage.getItem("sales")) || 0
  );

  const [cart, setCart] = useState([]);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("sales", sales);
  }, [products, sales]);

  // Add Product
  const addProduct = (name, category, qty, price, image) => {
    setProducts([
      ...products,
      { name, category, qty: Number(qty), price: Number(price), image },
    ]);
    alert("Product Added and Saved!");
  };

  // Update Stock
  const updateStock = (name, qty) => {
    setProducts((prev) =>
      prev.map((p) => (p.name === name ? { ...p, qty: parseInt(qty) } : p))
    );
    alert("Stock Updated and Saved!");
  };

  // Add to Cart
  const addToCart = (index) => {
    const product = products[index];
    if (product.qty > 0) {
      setCart([...cart, product]);
      setProducts((prev) =>
        prev.map((p, i) => (i === index ? { ...p, qty: p.qty - 1 } : p))
      );
    } else {
      alert("Out of stock!");
    }
  };

  // ✅ Checkout Function
  const checkout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setSales((prev) => prev + total);
    setCart([]);
    alert(`Checkout successful! Total: ₹${total}`);
  };

  return (
    <div>
      <header>
        <h1>STORE MANAGER - KEEP TRACK OF INVENTORY</h1>
      </header>
      <Navbar setActive={setActive} />
      <div className="content">
        {active === "home" && <Home />}
        {active === "cart" && (
  <Cart 
    cart={cart} 
    setCart={setCart} 
    checkout={checkout} 
    products={products} 
    setProducts={setProducts} 
  />
)}


        {active === "inventory" && (
          <Inventory
            products={products}
            addToCart={addToCart}
            deleteProduct={(index) =>
              setProducts(products.filter((_, i) => i !== index))
            }
          />
        )}
        {active === "add" && <AddProduct addProduct={addProduct} />}
        {active === "update" && <UpdateStock updateStock={updateStock} />}
        {active === "sales" && <Sales sales={sales} />}
      </div>
    </div>
  );
}
