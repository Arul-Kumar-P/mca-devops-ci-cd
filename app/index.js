const express = require("express");
const chalk = require("chalk");
const app = express();
const port = process.env.PORT || 3000;

// Product list (with INR prices)
const products = [
  { id: 1, name: "MacBook Pro", price: "₹1,49,990" },
  { id: 2, name: "iPhone 15 Pro", price: "₹1,34,900" },
  { id: 3, name: "Sony WH-1000XM5 Headphones", price: "₹29,990" },
  { id: 4, name: "Apple Watch Ultra", price: "₹89,900" },
  { id: 5, name: "Samsung Galaxy S24 Ultra", price: "₹1,29,999" },
  { id: 6, name: "Asus ROG Gaming Laptop", price: "₹1,09,990" },
  { id: 7, name: "GoPro Hero 12", price: "₹44,990" },
  { id: 8, name: "Noise Air Buds Pro 3", price: "₹2,999" },
  { id: 9, name: "OnePlus Nord CE 4", price: "₹25,999" },
  { id: 10, name: "Lenovo Legion 5 Pro", price: "₹1,24,999" }
];

// Home Page — cinematic look
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Arul Store 🎥</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Poppins', sans-serif;
            background: radial-gradient(circle at top, #0f2027, #203a43, #2c5364);
            color: #f5f5f5;
            min-height: 100vh;
            overflow-x: hidden;
            animation: fadeIn 2s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          header {
            text-align: center;
            padding: 60px 20px 20px;
            background: linear-gradient(to right, #111, #1a1a1a);
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
          }
          h1 {
            font-size: 3rem;
            color: #00e0ff;
            letter-spacing: 2px;
            text-transform: uppercase;
            animation: glow 2s ease-in-out infinite alternate;
          }
          @keyframes glow {
            from { text-shadow: 0 0 10px #00e0ff, 0 0 20px #00b4d8; }
            to { text-shadow: 0 0 25px #00e0ff, 0 0 50px #0077b6; }
          }
          p.subtitle {
            font-size: 1.2rem;
            opacity: 0.8;
          }
          .nav {
            margin-top: 20px;
          }
          .nav a {
            text-decoration: none;
            color: #00e0ff;
            margin: 0 15px;
            font-weight: 600;
            transition: color 0.3s, transform 0.3s;
          }
          .nav a:hover {
            color: #fff;
            transform: scale(1.1);
          }
          main {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            width: 80%;
            margin: 60px auto;
          }
          .card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 15px;
            padding: 25px;
            text-align: center;
            transition: all 0.4s ease;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            position: relative;
            overflow: hidden;
          }
          .card:hover {
            transform: translateY(-10px) scale(1.02);
            background: rgba(255,255,255,0.1);
            box-shadow: 0 0 25px rgba(0,224,255,0.3);
          }
          .card h2 {
            font-size: 1.4rem;
            margin-bottom: 10px;
          }
          .price {
            color: #00e0ff;
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 1.1rem;
          }
          button {
            background: linear-gradient(90deg, #00e0ff, #0077b6);
            border: none;
            color: #fff;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px #00e0ff;
          }
          footer {
            text-align: center;
            padding: 30px;
            font-size: 0.9rem;
            color: #999;
            background: #111;
            margin-top: 50px;
          }
          footer span {
            color: #00e0ff;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>🎬 Arul Store</h1>
          <p class="subtitle">Premium Tech. Cinematic Experience. Dark Vibes.</p>
          <div class="nav">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/checkout">Checkout</a>
          </div>
        </header>
        <main>
          ${products.map(p => `
            <div class="card">
              <h2>${p.name}</h2>
              <p class="price">${p.price}</p>
              <button>Buy Now</button>
            </div>
          `).join('')}
        </main>
        <footer>
          <p>© 2025 <span>Arul Store</span> | Designed with ❤️ in India 🇮🇳</p>
        </footer>
      </body>
    </html>
  `);
});

// Products API
app.get("/products", (req, res) => res.json(products));

// Checkout Page
app.get("/checkout", (req, res) => {
  res.send(`
    <html>
      <body style="text-align:center; font-family:'Poppins', sans-serif; background:linear-gradient(135deg,#141e30,#243b55); color:#f5f5f5; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <h1 style="color:#00e0ff;">✅ Checkout Complete!</h1>
        <p style="font-size:1.2rem;">Thank you for shopping with <strong>Arul Store</strong> 🎬</p>
        <a href="/" style="margin-top:20px; text-decoration:none; color:white; background:#00e0ff; padding:10px 25px; border-radius:20px;">⬅ Back to Home</a>
      </body>
    </html>
  `);
});

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(chalk.cyanBright(`🎬 Arul Store running on http://localhost:${port}`));
});

