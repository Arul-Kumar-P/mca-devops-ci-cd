const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const products = [
  {
    name: "Sony WH-1000XM5 Headphones",
    price: "₹29,990",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/37/headphones-1868612_1280.jpg",
  },
  {
    name: "Asus ROG Gaming Laptop",
    price: "₹1,49,999",
    image: "https://cdn.pixabay.com/photo/2017/03/19/18/52/laptop-2158121_1280.jpg",
  },
  {
    name: "GoPro Hero 12",
    price: "₹48,500",
    image: "https://cdn.pixabay.com/photo/2017/08/01/09/04/gopro-2562705_1280.jpg",
  },
  {
    name: "Apple iPhone 15 Pro",
    price: "₹1,34,900",
    image: "https://cdn.pixabay.com/photo/2015/12/09/17/12/iphone-1082240_1280.jpg",
  },
  {
    name: "Samsung Galaxy Watch 6",
    price: "₹28,999",
    image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/smart-watch-606312_1280.jpg",
  },
  {
    name: "Canon EOS R50 Camera",
    price: "₹78,999",
    image: "https://cdn.pixabay.com/photo/2014/12/27/15/40/camera-581126_1280.jpg",
  },
  {
    name: "Dell Inspiron Laptop",
    price: "₹58,499",
    image: "https://cdn.pixabay.com/photo/2017/01/22/19/20/laptop-2004498_1280.jpg",
  },
  {
    name: "Apple iPad Air",
    price: "₹59,900",
    image: "https://cdn.pixabay.com/photo/2014/11/21/03/24/tablet-540291_1280.jpg",
  },
  {
    name: "Bose SoundLink Speaker",
    price: "₹19,500",
    image: "https://cdn.pixabay.com/photo/2016/03/27/21/46/speaker-1284728_1280.jpg",
  },
  {
    name: "MacBook Air M2",
    price: "₹1,09,900",
    image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377_1280.jpg",
  },
];

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
            background: linear-gradient(145deg, #0a0a0a, #1b1b1b);
            color: #fff;
            overflow-x: hidden;
          }
          header {
            text-align: center;
            padding: 60px 0 30px;
            font-size: 3em;
            font-weight: 700;
            letter-spacing: 2px;
            color: #ffffff;
            text-shadow: 0 0 20px #00bcd4, 0 0 40px #2196f3;
            animation: headerGlow 3s ease-in-out infinite alternate;
          }
          @keyframes headerGlow {
            from { text-shadow: 0 0 15px #00bcd4; }
            to { text-shadow: 0 0 40px #2196f3; }
          }
          .product-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 30px;
            gap: 25px;
          }
          .product {
            width: 260px;
            background: #121212;
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.4s ease;
            box-shadow: 0 0 15px rgba(0,0,0,0.6);
            border: 1px solid #1f1f1f;
          }
          .product:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(0, 150, 255, 0.7);
          }
          .product img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            transition: opacity 0.8s;
          }
          .product:hover img {
            opacity: 0.85;
          }
          .product-info {
            padding: 20px;
            text-align: center;
          }
          .product-info h3 {
            color: #e0e0e0;
            font-size: 1.1em;
            font-weight: 600;
          }
          .product-info p {
            color: #00bcd4;
            font-weight: 600;
            margin: 10px 0;
          }
          .btn {
            display: inline-block;
            background: linear-gradient(90deg, #0066ff, #00bcd4);
            color: white;
            padding: 10px 25px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
          }
          .btn:hover {
            background: linear-gradient(90deg, #00bcd4, #0066ff);
            transform: scale(1.1);
          }
          footer {
            text-align: center;
            padding: 40px 0;
            font-size: 1em;
            color: #888;
            letter-spacing: 1px;
          }
        </style>
      </head>
      <body>
        <header>Arul Store</header>
        <section class="product-container">
          ${products.map(
            (p) => `
            <div class="product">
              <img src="${p.image}" alt="${p.name}">
              <div class="product-info">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
                <a href="/checkout" class="btn">Buy Now</a>
              </div>
            </div>`
          ).join("")}
        </section>
        <footer>© 2025 Arul Store</footer>
      </body>
    </html>
  `);
});

app.get("/checkout", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Checkout</title>
        <style>
          body {
            background: #000;
            color: #fff;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            padding-top: 150px;
            font-size: 2em;
            animation: fadeIn 2s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
      </head>
      <body>
        ✅ Checkout Complete<br><br>Thank you for shopping at <b>Arul Store</b>
      </body>
    </html>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Arul Store running on port ${port}`);
});

