import React from 'react';
import './Landing.css';
import background from '../../assets/background.png';

import cashInvoiceImg from '../../assets/cash-invoice.png';

const Landing = () => {
  return (
    <div>
      <div className="intro-container">
        <div className="background-image" style={{ backgroundImage: `url(${background})` }}></div>
        <div className="rectangle">
          <h1>Print Receipts Suited For Your Business</h1>
          <h2>Streamline your transactions with our range of custom-designed receipt layouts, 
            tailored to enhance your brand and optimize your customer's experience</h2>
          <button className="quote-button">GET A QUOTE</button>
        </div>
      </div>
      <div className="services-container"> 
        <h1>Our Services</h1>
        <p> A commercial printing service provider in the Philippines.<br/>Printing your requirements is now easier than ever. Here’s how it works:</p>
        <p> <br/>Step 1: Select a product<br/> Step 2: Customize<br/>Step 3: Book Now</p>
      <div className="product-container">
        <div className="product1">
          <img src={cashInvoiceImg} alt="Billing Invoice"/>
          <h3>Billing Invoice</h3>
          <p>Description of Billing Invoice</p>
          <button className="create-button">CREATE</button>
        </div>
        <div className="product2">
          <img src={cashInvoiceImg} alt="Sales Invoice"/> 
          <h3>Sales Invoice</h3>
          <p>Description of Sales Invoice</p>
          <button className="create-button">CREATE</button>
        </div>
        <div className="product3">
          <img src={cashInvoiceImg} alt="Cash Invoice"/>
          <h3>Cash Invoice</h3>
          <p>Description of Cash Invoice</p>
          <button className="create-button">CREATE</button>
        </div>
      </div>
      <div className="product-container2">
        <div className="product4">
          <img src={cashInvoiceImg} alt="Product 4"/>
          <h3>Product 4</h3>
          <p>Description of Product 4</p>
          <button className="create-button">CREATE</button>
        </div>
        <div className="product5">
          <img src={cashInvoiceImg} alt="Product 5"/> 
          <h3>Product 5</h3>
          <p>Description of Product 5</p>
          <button className="create-button">CREATE</button>
        </div>
        <div className="product6">
          <img src={cashInvoiceImg} alt="Product 6"/>
          <h3>Product 6</h3>
          <p>Description of Product 6</p>
          <button className="create-button">CREATE</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Landing;
