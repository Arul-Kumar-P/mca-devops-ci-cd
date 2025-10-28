const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Dummy product list
const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 200 }
];

// Home page with animation and colors
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Arul's Store 🚀</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: white;
            overflow-x: hidden;
            animation: bgShift 8s ease-in-out infinite alternate;
          }
          @keyframes bgShift {
            0% { background: linear-gradient(135deg, #00c6ff, #0072ff); }
            100% { background: linear-gradient(135deg, #ff6a00, #ee0979); }
          }
          h1 {
            text-align: center;
            font-size: 3rem;
            margin-top: 50px;
            animation: glow 2s infinite alternate;
          }
          @keyframes glow {
            from { text-shadow: 0 0 10px #fff, 0 0 20px #00c6ff; }
            to { text-shadow: 0 0 20px #fff, 0 0 40px #ff6a00; }
          }
          p {
            text-align: center;
            font-size: 1.2rem;
            animation: fadeIn 2s ease-in-out;
          }
          ul {
            display: flex;
            justify-content: center;
            list-style: none;
            padding: 0;
            flex-wrap: wrap;
            gap: 15px;
          }
          li {
            background: rgba(255,255,255,0.1);
            padding: 15px 25px;
            border-radius: 15px;
            backdrop-filter: blur(8px);
            font-size: 1.2rem;
            transition: transform 0.3s, background 0.3s;
            box-shadow: 0 0 15px rgba(255,255,255,0.3);
          }
          li:hover {
            transform: scale(1.1) rotate(3deg);
            background: rgba(255,255,255,0.3);
          }
          a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
          }
          .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin: 50px auto;
            width: 80%;
          }
          .product {
            background: rgba(255,255,255,0.15);
            padding: 20px;
            border-radius: 20px;
            text-align: center;
            transition: all 0.4s ease;
            box-shadow: 0 0 20px rgba(255,255,255,0.3);
          }
          .product:hover {
            transform: translateY(-10px) scale(1.05);
            background: rgba(255,255,255,0.3);
          }
          button {
            margin-top: 15px;
            background: linear-gradient(45deg, #ff6a00, #ee0979);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s;
          }
          button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px #fff;
          }
          footer {
            text-align: center;
            margin-top: 50px;
            font-size: 0.9rem;
            opacity: 0.8;
            animation: fadeIn 3s ease-in-out;
          }
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
        </style>
      </head>
      <body>
        <h1>🛍️ Welcome to <span style="color: #fff700;">Arul's Store</span> 🚀</h1>
        <p>✨ Experience Shopping Like Never Before ✨</p>
        <ul>
          <li><a href="/products">View Products</a></li>
          <li><a href="/checkout">Checkout</a></li>
        </ul>
        <div class="products">
          ${products.map(p => `
            <div class="product">
              <h2>${p.name}</h2>
              <p>💰 $${p.price}</p>
              <button>Buy Now</button>
            </div>
          `).join('')}
        </div>
        <footer>Made with ❤️ by Arul Kumar | Node.js + Express</footer>
      </body>
    </html>
  `);
});

// Products JSON API
app.get("/products", (req, res) => {
  res.json(products);
});

// Checkout simulation
app.get("/checkout", (req, res) => {
  res.send(`
    <html>
      <body style="text-align:center; font-family:sans-serif; background:linear-gradient(120deg,#84fab0,#8fd3f4); color:#333; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <h1>✅ Checkout Complete!</h1>
        <p>Thank you for shopping with <strong>Arul's Store</strong> 💙</p>
        <a href="/" style="margin-top:20px; text-decoration:none; color:white; background:#333; padding:10px 20px; border-radius:10px;">⬅ Back to Home</a>
      </body>
    </html>
  `);
});

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(`🌐 Arul's Store running on http://localhost:${port}`);
});

