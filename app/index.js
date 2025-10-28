const express = require("express");
const chalk = require("chalk");
const app = express();
const port = process.env.PORT || 3000;

// Product list with images and INR prices
const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: "₹1,49,990",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=940&hei=1112&fmt=png-alpha&.v=1697230830118"
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: "₹1,34,900",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blue-titanium?wid=940&hei=1112&fmt=png-alpha&.v=1692923982200"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: "₹29,990",
    image: "https://m.media-amazon.com/images/I/61+t8sGDi-L._SX679_.jpg"
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    price: "₹89,900",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQFM3ref_VW_34FR+watch-case-49-titanium-ultra_VW_34FR+watch-face-49-ocean-blue-ultra_VW_34FR_GEO_IN?wid=940&hei=1112&fmt=png-alpha&.v=1693603034252"
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,29,999",
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s928bzkgins/gallery/in-galaxy-s24-ultra-sm-s928-491598-sm-s928bzkgins-539848070?$684_547_PNG$"
  },
  {
    id: 6,
    name: "Asus ROG Gaming Laptop",
    price: "₹1,09,990",
    image: "https://dlcdnwebimgs.asus.com/gain/a1f0f1b3-ff4b-45b1-b3b2-7d7fae5233ce/"
  },
  {
    id: 7,
    name: "GoPro Hero 12",
    price: "₹44,990",
    image: "https://m.media-amazon.com/images/I/61lFJqW2W1L._SX679_.jpg"
  },
  {
    id: 8,
    name: "Noise Air Buds Pro 3",
    price: "₹2,999",
    image: "https://m.media-amazon.com/images/I/51SWk6cpbkL._SX679_.jpg"
  },
  {
    id: 9,
    name: "OnePlus Nord CE 4",
    price: "₹25,999",
    image: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SX679_.jpg"
  },
  {
    id: 10,
    name: "Lenovo Legion 5 Pro",
    price: "₹1,24,999",
    image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg"
  }
];

// Home page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Arul Store</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
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
            padding: 50px 20px 20px;
            background: rgba(0, 0, 0, 0.7);
            box-shadow: 0 0 40px rgba(0,0,0,0.8);
            backdrop-filter: blur(10px);
          }
          h1 {
            font-size: 3rem;
            color: #00e0ff;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-shadow: 0 0 15px #00e0ff, 0 0 30px #0077b6;
          }
          .nav {
            margin-top: 20px;
          }
          .nav a {
            text-decoration: none;
            color: #00e0ff;
            margin: 0 15px;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .nav a:hover {
            color: #fff;
            transform: scale(1.1);
          }
          main {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 35px;
            width: 85%;
            margin: 60px auto;
            padding-bottom: 60px;
          }
          .card {
            background: rgba(255,255,255,0.05);
            border-radius: 15px;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 0 25px rgba(0,0,0,0.6);
            transition: all 0.4s ease;
          }
          .card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 0 40px rgba(0,224,255,0.3);
          }
          .card img {
            width: 100%;
            height: 200px;
            object-fit: contain;
            background: rgba(0,0,0,0.3);
            transition: transform 0.4s ease;
          }
          .card:hover img {
            transform: scale(1.08);
          }
          .card h2 {
            font-size: 1.2rem;
            margin: 15px 0 5px;
          }
          .price {
            color: #00e0ff;
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 15px;
          }
          button {
            background: linear-gradient(90deg, #00e0ff, #0077b6);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            margin-bottom: 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px #00e0ff;
          }
          footer {
            text-align: center;
            background: rgba(0, 0, 0, 0.8);
            padding: 25px;
            font-size: 0.9rem;
            color: #aaa;
          }
          footer span { color: #00e0ff; }
        </style>
      </head>
      <body>
        <header>
          <h1>Arul Store</h1>
          <div class="nav">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/checkout">Checkout</a>
          </div>
        </header>
        <main>
          ${products.map(p => `
            <div class="card">
              <img src="${p.image}" alt="${p.name}">
              <h2>${p.name}</h2>
              <p class="price">${p.price}</p>
              <button>Buy Now</button>
            </div>
          `).join('')}
        </main>
        <footer>
          © 2025 <span>Arul Store</span> | All Rights Reserved
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
      <body style="text-align:center; font-family:'Poppins',sans-serif; background:linear-gradient(135deg,#141e30,#243b55); color:#f5f5f5; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <h1 style="color:#00e0ff;">✅ Checkout Complete!</h1>
        <p style="font-size:1.2rem;">Thank you for shopping with <strong>Arul Store</strong> 🛒</p>
        <a href="/" style="margin-top:20px; text-decoration:none; color:white; background:#00e0ff; padding:10px 25px; border-radius:20px;">⬅ Back to Home</a>
      </body>
    </html>
  `);
});

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(chalk.cyanBright(`🛍️ Arul Store running on http://localhost:${port}`));
});

