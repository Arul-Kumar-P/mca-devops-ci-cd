const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arul Store</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

      body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: radial-gradient(circle at top, #0a0a0a 0%, #000000 100%);
        color: white;
        overflow-x: hidden;
      }

      h1 {
        text-align: center;
        font-size: 3em;
        color: #00e6e6;
        margin-top: 40px;
        text-shadow: 0 0 30px #00ffff;
        animation: glow 2s infinite alternate;
      }

      @keyframes glow {
        from { text-shadow: 0 0 10px #00ffff; }
        to { text-shadow: 0 0 30px #00ffff, 0 0 50px #00cccc; }
      }

      .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        padding: 50px;
      }

      .card {
        background: linear-gradient(180deg, #1a1a1a, #000000);
        border-radius: 18px;
        box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
        overflow: hidden;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        position: relative;
      }

      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 0 40px rgba(0, 255, 255, 0.35);
      }

      .card img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        transition: opacity 0.5s ease;
      }

      .card:hover img {
        opacity: 0.85;
      }

      .info {
        padding: 20px;
        text-align: center;
      }

      .info h2 {
        margin: 10px 0;
        font-size: 1.2em;
        color: #fff;
      }

      .price {
        font-size: 1.1em;
        color: #00ffff;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .buy-btn {
        background: #00ffff;
        border: none;
        padding: 10px 25px;
        border-radius: 30px;
        color: #000;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s, transform 0.3s;
      }

      .buy-btn:hover {
        background: #00cccc;
        transform: scale(1.1);
      }

      footer {
        text-align: center;
        padding: 30px;
        color: #666;
        font-size: 0.9em;
      }

      /* Fade-in animation for cards */
      @keyframes fadeUp {
        from {
          transform: translateY(50px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .card {
        animation: fadeUp 1s ease forwards;
      }

      .card:nth-child(odd) {
        animation-delay: 0.3s;
      }
      .card:nth-child(even) {
        animation-delay: 0.6s;
      }
    </style>
  </head>
  <body>
    <h1>Arul Store</h1>

    <div class="container">
      <div class="card">
        <img src="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg" alt="Sony WH-1000XM5 Headphones">
        <div class="info">
          <h2>Sony WH-1000XM5 Headphones</h2>
          <div class="price">₹29,990</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://dlcdnwebimgs.asus.com/gain/1c70e4b2-1c2c-49a3-a5a3-513e12e09d10/" alt="Asus ROG Gaming Laptop">
        <div class="info">
          <h2>Asus ROG Gaming Laptop</h2>
          <div class="price">₹1,49,999</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/71wbhWcDPGL._SL1500_.jpg" alt="GoPro Hero 12">
        <div class="info">
          <h2>GoPro Hero 12</h2>
          <div class="price">₹48,500</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg" alt="Apple iPhone 15 Pro">
        <div class="info">
          <h2>Apple iPhone 15 Pro</h2>
          <div class="price">₹1,34,900</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg" alt="Samsung Galaxy Watch 6">
        <div class="info">
          <h2>Samsung Galaxy Watch 6</h2>
          <div class="price">₹28,999</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/71gD8WdSlaL._SL1500_.jpg" alt="Canon EOS R50 Camera">
        <div class="info">
          <h2>Canon EOS R50 Camera</h2>
          <div class="price">₹82,490</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/61VJtKbAssL._SL1500_.jpg" alt="Dell Inspiron Laptop">
        <div class="info">
          <h2>Dell Inspiron Laptop</h2>
          <div class="price">₹74,990</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/71T-pzxW2hL._SL1500_.jpg" alt="Apple iPad Air">
        <div class="info">
          <h2>Apple iPad Air</h2>
          <div class="price">₹59,900</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/71qbGiUeQxL._SL1500_.jpg" alt="Bose SoundLink Speaker">
        <div class="info">
          <h2>Bose SoundLink Speaker</h2>
          <div class="price">₹17,999</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg" alt="MacBook Air M2">
        <div class="info">
          <h2>MacBook Air M2</h2>
          <div class="price">₹1,24,900</div>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>

    <footer>© 2025 Arul Store — All Rights Reserved</footer>
  </body>
  </html>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🔥 Arul Store running on http://0.0.0.0:${port}`);
});

