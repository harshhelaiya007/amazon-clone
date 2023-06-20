import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="/images/amazonbanner.jpg"
          className="homebanner_image"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Better Home Stainless Steel Water Bottle 1 Litre | Non-Toxic & BPA Free Water Bottles 1+ Litre | Steel Bottle For Home, Office & School"
            id="1221"
            price={150}
            image="/images/bottle.png"
            rating={5}
          />

          <Product
            id="123123123"
            title="Wecool Moonwalk M1 ENC True Wireless in Ear Earbuds with Mic, Titanium Drivers for Rich Bass Experience, 40+ Hours Play Time, Type C Fast Charging, Low Latency, BT"
            price={150}
            image="/images/earphone.webp"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="The Lean Startup"
            id="122121"
            price={29.9}
            image="/images/book.jfif"
            rating={5}
          />

          <Product
            title="Starlight Aluminium Case with Sport Band - Starlight, 2


Free Delivery

New
Apple Watch
Starlight Aluminium Case with Sport Band
From ₹7650.00/mo.Per Month with No Cost EMI with selected banksFootnote§ or ₹45900.00Footnote‡"
            id="1233"
            price={29.9}
            image="/images/watch.jpg"
            rating={4}
          />

          <Product
            title="Fashion SAY Women's Rayon Multiple Kurtis & Palazzo (Multicolor) - P (Select Size Below for Each Product Descriptions)"
            id="121233278"
            price={150}
            image="/images/kurti.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="TOSHIBA 139 cm (55 inches) Bezelless Series 4K Ultra HD Smart LED Google TV 55C350LP (Black)"
            id="456773"
            price={3999}
            image="/images/tv2.webp"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
