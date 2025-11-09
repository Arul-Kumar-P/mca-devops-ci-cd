const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Product list — all working images from reliable CDNs
const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Headphones",
    price: "₹29,990",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/37/headphones-1868612_1280.jpg"
  },
  {
    id: 2,
    name: "Asus ROG Gaming Laptop",
    price: "₹1,49,999",
    image: "https://cdn.pixabay.com/photo/2017/03/19/18/52/laptop-2158121_1280.jpg"
  },
  {
    id: 3,
    name: "GoPro Hero 12",
    price: "₹48,500",
    image: "https://cdn.pixabay.com/photo/2017/08/01/09/04/gopro-2562705_1280.jpg"
  },
  {
    id: 4,
    name: "Apple iPhone 15 Pro",
    price: "₹1,34,900",
    image: "https://cdn.pixabay.com/photo/2015/12/09/17/12/iphone-1082240_1280.jpg"
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    price: "₹28,999",
    image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/smart-watch-606312_1280.jpg"
  },
  {
    id: 6,
    name: "Apple MacBook Air M2",
    price: "₹1,09,900",
    image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377_1280.jpg"
  },
  {
    id: 7,
    name: "Canon EOS R50 DSLR Camera",
    price: "₹78,999",
    image: "https://cdn.pixabay.com/photo/2014/12/27/15/40/camera-581126_1280.jpg"
  },
  {
    id: 8,
    name: "Samsung 4K Smart TV 55-inch",
    price: "₹64,999",
    image: "https://cdn.pixabay.com/photo/2014/09/23/21/23/television-457438_1280.jpg"
  },
  {
    id: 9,
    name: "Bose SoundLink Bluetooth Speaker",
    price: "₹19,500",
    image: "https://cdn.pixabay.com/photo/2016/03/27/21/46/speaker-1284728_1280.jpg"
  },
  {
    id: 10,
    name: "Dell Inspiron Laptop",
    price: "₹58,499",
    image: "https://cdn.pixabay.com/photo/2017/01/22/19/20/laptop-2004498_1280.jpg"
  },
  {
    id: 11,
    name: "Apple iPad Air (2024)",
    price: "₹59,900",
    image: "https://cdn.pixabay.com/photo/2014/11/21/03/24/tablet-540291_1280.jpg"
  },
  {
    id: 12,
    name: "Noise ColorFit Pro 4",
    price: "₹4,999",
    image: "https://cdn.pixabay.com/photo/2020/04/27/06/19/smart-watch-5094900_1280.jpg"
  }
];

// Homepage
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Arul Store</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #000000, #1a1a1a, #000000);
            color: #fff;
            overflow-x: hidden;
            animation: bgmove 10s infinite alternate;
          }
          @keyframes bgmove {
            from { background-position: left; }
            to { background-position: right; }
          }
          header {
            text-align: center;
            padding: 60px 0;
            font-size: 3em;
            font-weight: bold;
            color: #ff3366;
            text-shadow: 0 0 20px #ff0044, 0 0 40px #ff3399;
            animation: glow 2s infinite alternate;
          }
          @keyframes glow {
            from { text-shadow: 0 0 15px #ff0044; }
            to { text-shadow: 0 0 35px #ff66cc; }
          }
          .product-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px;
            padding: 40px;
          }
          .product {
            width: 250px;
            background: #111;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(255, 0, 85, 0.4);
            overflow: hidden;
            transition: all 0.4s ease-in-out;
            position: relative;
          }
          .product:hover {
            transform: scale(1.08);
            box-shadow: 0 0 40px rgba(255, 50, 150, 0.7);
          }
          .product img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            transition: opacity 0.8s ease-in-out;
          }
          .product:hover img {
            opacity: 0.85;
          }
          .product-info {
            padding: 15px;
            text-align: center;
          }
          .product-info h3 {
            color: #fff;
            font-size: 1.1em;
          }
          .product-info p {
            color: #ff66cc;
            font-weight: bold;
            font-size: 1em;
          }
          .btn {
            display: inline-block;
            margin-top: 10px;
            background: linear-gradient(90deg, #ff0044, #ff55aa);
            color: white;
            padding: 10px 25px;
            border-radius: 30px;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .btn:hover {
            background: linear-gradient(90deg, #ff55aa, #ff0044);
            transform: scale(1.1);
          }
          footer {
            text-align: center;
            padding: 30px;
            color: #999;
            font-size: 1em;
          }
        </style>
      </head>
      <body>
        <header>🎬 Arul Store — Feel the Cinematic Vibe 💫</header>
        <section class="product-container">
          ${products
            .map(
              (p) => `
              <div class="product">
                <img src="${p.image}" alt="${p.name}">
                <div class="product-info">
                  <h3>${p.name}</h3>
                  <p>${p.price}</p>
                  <a href="/checkout" class="btn">Buy Now</a>
                </div>
              </div>`
            )
            .join("")}
        </section>
        <footer>© 2025 Arul Store | Dark Cinematic Shopping Experience 🌌</footer>
      </body>
    </html>
  `);
});

// Checkout route
app.get("/checkout", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Checkout - Arul Store</title>
        <style>
          body {
            background: black;
            color: white;
            text-align: center;
            padding-top: 100px;
            font-family: 'Poppins', sans-serif;
            font-size: 2em;
            animation: fadein 2s;
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
      </head>
      <body>
        ✅ Checkout Complete! <br><br> Thank you for shopping at <b>Arul Store</b> 💫
      </body>
    </html>
  `);
});

app.listen(port, "0.0.0.0", () =>
  console.log(`🎬 Arul Store running on port ${port}`)
);

