import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        loading="lazy"
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/August/Specials/GW/GW_PC_BUNK_1500x600._CB407487469_.jpg"
        alt="amazon special 50% off"
      />
      <div className="home__row">
        <Product
          id="1234567"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={300}
          rating={5}
          image="data:image/webp;base64,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"
        />
        <Product
          id="2134567"
          title="Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 256GB) - Space Gray (4th Generation)"
          price={1000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3124567"
          title="Dell Alienware A51 Gaming Laptop"
          price={3000}
          rating={5}
          image="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/17_area-51m_non-tobii/pdp/laptops-aw-alienware-area-51m-nt-pdp-mod-hero.jpg?fmt=jpg&wid=570&hei=400"
        />
        <Product
          id="4123567"
          title="Samsung Galaxy Z Flip"
          price={1200}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61cg1Nzk2XL._AC_SL1500_.jpg"
        />
        <Product
          id="5123467"
          title="DIVELUX Snorkel Mask - Original Full Face Snorkeling and Diving Mask with 180° Panoramic Viewing"
          price={30}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71wmviQFnaL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6123457"
          title={`Dell U-Series 37.5" Screen LED-Lit Monitor`}
          price={157539}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71RS-pt9QTL._SL1280_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
