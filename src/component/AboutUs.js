import React from 'react';
import '../images/css/aboutus.css' ;
import Footer from './footer'

function AboutUs() {
  return (
    <>
    <div className="heading">
      <div>
        <h1 style={{ fontFamily: 'Comic Sans MS' }}>
          THE <span>VEGETABLE</span> HUB
        </h1>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src={require("../images/site logo.jpg")} alt="Site Logo" />
          </div>
          <div className="about-content">
            <h2>
              <b>
                "Where every click adds a little more crunch to your lunch!"
              </b>
            </h2>
            <p>
            Welcome to our vibrant online vegetable marketplace! At THE VEGETABLE HUB, we're not just selling vegetables – we're cultivating a community that celebrates the essence of nature's bounty. With a passion for freshness and a commitment to quality, we have embarked on a journey to bring farm-fresh goodness right to your doorstep.

 Our story begins with a love for wholesome, nutrient-rich produce that inspired us to create a seamless online platform for both farmers and consumers. We take pride in working directly with local farmers who share our values of sustainability and responsible farming practices. Every vegetable on our virtual shelves tells a tale of dedication, hard work, and a deep-rooted connection to the land.

What sets us apart is not just our wide array of meticulously curated vegetables, but also the trust we build with our customers. From the moment you browse our website to the instant your order arrives, we strive to provide an experience that's as delightful as it is convenient. Our commitment to freshness means that the vibrant colors, crisp textures, and authentic flavors of our produce are retained from farm to table.

 Join us in embracing a healthier, greener lifestyle, one order at a time. As you explore THE VEGETABLE HUB, remember that you're not just shopping for vegetables – you're becoming a part of a movement that values nature's gifts and the hands that nurture them. Thank you for choosing us to be your preferred source of farm-fresh delight.
              
            </p>
          </div>
        </section>
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
}

export default AboutUs;

