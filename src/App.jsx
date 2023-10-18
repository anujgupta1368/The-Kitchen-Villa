import React from "react";
import { useState } from "react";
import "./index.css";
import homeImg from "./img/home.png";
import foodImg from "./img/food1.png";
import food2 from "./img/food2.png";
import food3 from "./img/food3.png";
import orderFood from "./img/orderfood.png";
import aboutImg from "./img/about.png";
import boxImg from "./img/box.png";
import shippingImg from "./img/shiping.png";
import deliverImg from "./img/deliver.png";
import ImageGallery from "react-image-gallery";
import img1 from "./img/gallery/1.jpg";
import img2 from "./img/gallery/2.jpg";
import img3 from "./img/gallery/3.jpeg";
import img4 from "./img/gallery/4.jpg";
import img5 from "./img/gallery/5.jpg";
import logo from "./img/logo.png";
import imgm1 from "./img/menu/1.jpeg";
import imgm2 from "./img/menu/2.jpeg";
import imgm3 from "./img/menu/3.jpeg";
import imgm4 from "./img/menu/4.jpeg";
import imgm5 from "./img/menu/5.jpeg";
import imgm6 from "./img/menu/6.jpeg";
import {
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsList,
} from "react-icons/bs";

import Footer from "./Footer";

const images = [
  {
    original: `${img5}`,
    thumbnail: `${img5}`,
  },
  {
    original: `${img2}`,
    thumbnail: `${img2}`,
  },
  {
    original: `${img3}`,
    thumbnail: `${img3}`,
  },
  {
    original: `${img4}`,
    thumbnail: `${img4}`,
  },
  {
    original: `${img1}`,
    thumbnail: `${img1}`,
  },
];
const menu = [
  {
    original: `${imgm6}`,
    thumbnail: `${imgm6}`,
    originalHeight: "400px",
  },
  {
    original: `${imgm5}`,
    thumbnail: `${imgm5}`,
    originalHeight: "400px",
  },
  {
    original: `${imgm2}`,
    thumbnail: `${imgm2}`,
    originalHeight: "400px",
  },
  {
    original: `${imgm3}`,
    thumbnail: `${imgm3}`,
    originalHeight: "400px",
  },
  {
    original: `${imgm4}`,
    thumbnail: `${imgm4}`,
    originalHeight: "400px",
  },
  {
    original: `${imgm1}`,
    thumbnail: `${imgm1}`,
    originalHeight: "400px",
  },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header>
        <a href="#" className="logo">
          <img
            style={{
              width: "30%",
              borderRadius: "35%",
            }}
            src={logo}
            alt="logo"
          />
        </a>
        <div
          className={`bx bx-menu ${menuOpen ? "open" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <BsList />
        </div>
        <ul className={`navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#" onClick={handleMenuClick}>
              Home
            </a>
          </li>

          <li>
            <a href="#menu" onClick={handleMenuClick}>
              Menu
            </a>
          </li>
          <li>
            <a href="#service" onClick={handleMenuClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuClick}>
              Contact
            </a>
          </li>
        </ul>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h1>The Kitchen Villa</h1>
          <h2>
            WE LIKE TO SAY
            <br />
            'PADHARIYE'
          </h2>
          <a
            href="https://www.swiggy.com/restaurants/the-kitchen-villa-evershine-tower-vaishali-nagar-jaipur-728284?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
            className="button"
            target="blank"
          >
            Order Now
          </a>
        </div>
        <div className="home-img">
          <img src={homeImg} alt="Home" />
        </div>
      </section>
      <section className="gallery">
        <ImageGallery items={images} />
      </section>
      <section className="menu" id="menu">
        <div className="heading">
          <span style={{ fontSize: "40px", marginBottom: "20px" }}>Menu</span>
          <h1
            style={{
              fontSize: "50px",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            स्वाद के सफर में आपका स्वागत है
          </h1>
        </div>

        <ImageGallery items={menu} />
      </section>

      <section className="order" id="order">
        <div className="order-text">
          <h2>Are you hungry?</h2>
          <h1 style={{ paddingBottom: "50px" }}>Don't wait!</h1>
          <a
            href="https://www.swiggy.com/restaurants/the-kitchen-villa-evershine-tower-vaishali-nagar-jaipur-728284?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
            className="button"
            target="blank"
          >
            Order Now
          </a>
        </div>
        <div className="order-img">
          <img src={orderFood} alt="Order Food" />
        </div>
      </section>

      {/* <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="about-text">
          
          <h2>
WE LIKE TO SAY  <br />
            'PADHARIYE'
          </h2>
          
        </div>
      </section> */}

      <section className="service" id="service">
        <div className="heading">
          <span style={{ fontSize: "40px", marginBottom: "20px" }}>
            Services
          </span>
          <h2>We provide best quality food</h2>
        </div>
        <div className="service-container">
          {/* <div className="s-box">
            <img src={boxImg} alt="Order" />
            <h3>Order</h3>
            <p>
              A full display of menu items and billing features make it easier
              for the customers to order food
            </p>
          </div> */}

          <div className="s-box">
            <img src={deliverImg} alt="Delivered" />
            <h3>Dine-in </h3>
          </div>
          <div className="s-box">
            <img src={boxImg} alt="Delivered" />
            <h3>Takeaway </h3>
          </div>
          <div className="s-box">
            <img src={shippingImg} alt="Shipping" />
            <h3>Delivery</h3>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <h2>
          We make quality food <br />
          Everyday
        </h2>
        <a
          href="https://www.swiggy.com/restaurants/the-kitchen-villa-evershine-tower-vaishali-nagar-jaipur-728284?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
          className="button"
          target="blank"
        >
          Order Now
        </a>
      </section>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default App;
