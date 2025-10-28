const express = require("express");
const chalk = require("chalk");
const app = express();
const port = process.env.PORT || 3000;

// Dummy product list
const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 200 }
];

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Arul's Animated Store 🚀</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
            animation: bgshift 10s ease-in-out infinite alternate;
          }
          @keyframes bgshift {
            0% { background: linear-gradient(135deg, #6a11cb, #2575fc); }
            50% { background: linear-gradient(135deg, #ff416c, #ff4b2b); }
            100% { background: linear-gradient(135deg, #11998e, #38ef7d); }
          }
          h1 {
            text-align: center;
            margin-top: 50px;
            font-size: 3.5rem;
            animation: glow 2s ease-in-out infinite alternate;
          }
          @keyframes glow {
            from { text-shadow: 0 0 10px #fff, 0 0 20px #00f0ff; }
            to { text-shadow: 0 0 20px #fff, 0 0 40px #ff00ff; }
          }
          p {
            text-align: center;
            margin-top: 10px;
            font-size: 1.2rem;
            opacity: 0.9;
          }
          .links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
            flex-wrap: wrap;
          }
          .links a {
            background: rgba(255,255,255,0.2);
            color: #fff;
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            transition: all 0.3s;
            font-weight: 600;
          }
          .links a:hover {
            background: #fff;
            color: #333;
            transform: scale(1.1);
            box-shadow: 0 0 15px #fff;
          }
          .product-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            width: 80%;
            margin: 60px auto;
          }
          .card {
            background: rgba(255,255,255,0.15);
            border-radius: 20px;
            padding: 20px;
            text-align: center;
            backdrop-filter: blur(6px);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }
          .card:hover {
            transform: translateY(-10px) scale(1.05);
            background: rgba(255,255,255,0.25);
            box-shadow: 0 0 25px rgba(255,255,255,0.3);
          }
          .card::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 60%);
            top: -50%;
            left: -50%;
            animation: rotate 10s linear infinite;
          }
          @keyframes rotate {
            100% { transform: rotate(360deg); }
          }
          h2 { margin-bottom: 10px; font-weight: 700; }
          p.price { font-size: 1.3rem; color: #fff700; margin-bottom: 15px; }
          button {
            background: linear-gradient(45deg, #ff6a00, #ee0979);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
          }
          button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px #fff;
          }
          footer {
            text-align: center;
            margin: 40px 0;
            font-size: 0.9rem;
            opacity: 0.8;
          }
        </style>
      </head>
      <body>
        <h1>🛒 Arul's Animated Store 🚀</h1>
        <p>Where shopping meets animation and color 🎨✨</p>
        <div class="links">
          <a href="/products">View Products</a>
          <a href="/checkout">Checkout</a>
        </div>
        <div class="product-container">
          ${products.map(p => `
            <div class="card">
              <h2>${p.name}</h2>
              <p class="price">💰 $${p.price}</p>
              <button>Buy Now</button>
            </div>
          `).join("")}
        </div>
        <footer>Made with ❤️ by Arul Kumar | MCA DevOps Project</footer>
      </body>
    </html>
  `);
});

// Products endpoint
app.get("/products", (req, res) => res.json(products));

// Checkout endpoint
app.get("/checkout", (req, res) => {
  res.send(`
    <html>
      <body style="text-align:center; font-family:sans-serif; background:linear-gradient(135deg,#84fab0,#8fd3f4); color:#333; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <h1>✅ Checkout Successful!</h1>
        <p>Thanks for shopping with <strong>Arul's Store</strong> 💙</p>
        <a href="/" style="margin-top:20px; text-decoration:none; color:white; background:#333; padding:10px 20px; border-radius:10px;">⬅ Back to Home</a>
      </body>
    </html>
  `);
});

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(chalk.cyanBright(`🌐 Arul's Animated Store running at http://localhost:${port}`));
});

