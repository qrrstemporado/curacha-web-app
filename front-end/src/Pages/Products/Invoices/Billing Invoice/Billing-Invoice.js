import React, { useState } from 'react';
import NavBar from '../../../../components/Navbar/Navbar';
import FooterPage from '../../../FooterPage/FooterPage';
import './Billing-Invoice.css';
import billing from '../../../../assets/billing-quote.svg';
import half1 from '../../../../assets/one-half.svg';
import forth1 from '../../../../assets/one-fourth.svg';

const Billing = () => {
  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState('');
  const [paperSize, setPaperSize] = useState('');
  const [numberOfPly, setNumberOfPly] = useState('');
  const [paperType, setPaperType] = useState('');
  const [colorPrinting, setColorPrinting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSize(newSize);
  };

  const handlePaperSizeChange = (event) => {
    const newPaperSize = event.target.value;
    setPaperSize(newPaperSize);
  };

  const handleNumberOfPlyChange = (event) => {
    const newNumberOfPly = event.target.value;
    setNumberOfPly(newNumberOfPly);
  };

  const handlePaperTypeChange = (event) => {
    const newPaperType = event.target.value;
    setPaperType(newPaperType);
  };

  const handleColorPrintingChange = (event) => {
    const newColorPrinting = event.target.checked;
    setColorPrinting(newColorPrinting);
  };

  let additionalCost = 0;

  if (paperType === 'Carbonless Paper' && paperSize === 'Short Size (8.5 x 11)') {
    additionalCost = 300;
  } else if (paperType === 'Carbonless Paper' && paperSize === 'Long Size (8.5 x 13)') {
    additionalCost = 370;
  } else if (paperType === 'Bond Paper' && paperSize === 'Short Size (8.5 x 11)') {
    additionalCost = 180;
  } else if (paperType === 'Bond Paper' && paperSize === 'Long Size (8.5 x 13)') {
    additionalCost = 200;
  } else if (paperType === 'Colored Bond' && paperSize === 'Short Size (8.5 x 11)') {
    additionalCost = 230;
  } else if (paperType === 'Colored Bond' && paperSize === 'Long Size (8.5 x 13)') {
    additionalCost = 260;
  } else if (paperType === 'Onion Skin' && paperSize === 'Short Size (8.5 x 11)') {
    additionalCost = 160;
  } else if (paperType === 'Onion Skin' && paperSize === 'Long Size (8.5 x 13)') {
    additionalCost = 180;
  } else if (paperType === 'Newsprint (white)' && paperSize === 'Short Size (8.5 x 11)') {
    additionalCost = 160;
  } else if (paperType === 'Newsprint (white)' && paperSize === 'Long Size (8.5 x 13)') {
    additionalCost = 190;
  } else if (paperType === 'Newsprint (colored)' && paperSize === 'Short Size (8.5 x 11)') {
    additionalCost = 165;
  } else if (paperType === 'Newsprint (colored)' && paperSize === 'Long Size (8.5 x 13)') {
    additionalCost = 195;
  }

  const total = quantity ? quantity * additionalCost : 0;

  const images = [billing, half1, forth1];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <NavBar />
      <div className="billingContainer">
        <div className="main-container">
          <div className="product-info">
            <div className="image-container">
              <button className="nav-button left" onClick={handlePrevImage}>&lt;</button>
              <img src={images[currentImageIndex]} alt="Product" className="product-image" />
              <button className="nav-button right" onClick={handleNextImage}>&gt;</button>
            </div>
            <h1 className="red-title">Billing Invoice</h1>
            <p className="description">DESCRIPTION OF THE PRODUCT</p>
          </div>

          <div className="price-calc-container">
            <h3> Price Calculator</h3>
            <div className="input-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                className="input-box"
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="0"
              />
            </div>

            <div className="input-group">
              <label htmlFor="size">Size:</label>
              <select
                className="input-box"
                id="size"
                value={size}
                onChange={handleSizeChange}
              >
                <option value="">Select Size</option>
                <option value="1/4">1/4</option>
                <option value="1/2">1/2</option>
                <option value="1 Whole">1 Whole</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="paper-size">Paper Size:</label>
              <select
                className="input-box"
                id="paper-size"
                value={paperSize}
                onChange={handlePaperSizeChange}
              >
                <option value="">Select Paper Size</option>
                <option value="Short Size (8.5 x 11)">Short Size (8.5 x 11)</option>
                <option value="Long Size (8.5 x 13)">Long Size (8.5 x 13)</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="number-of-ply">Number of Ply:</label>
              <input
                className="input-box"
                type="number"
                id="number-of-ply"
                value={numberOfPly}
                onChange={handleNumberOfPlyChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="paper-type">Paper Type:</label>
              <select
                className="input-box"
                id="paper-type"
                value={paperType}
                onChange={handlePaperTypeChange}
              >
                <option value="">Select Paper Type</option>
                <option value="Carbonless Paper">Carbonless Paper</option>
                <option value="Bond Paper">Bond Paper</option>
                <option value="Colored Bond">Colored Bond</option>
                <option value="Onion Skin">Onion Skin</option>
                <option value="Newsprint (white)">Newsprint (white)</option>
                <option value="Newsprint (colored)">Newsprint (colored)</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="color-printing">Color Printing:</label>
              <input
                className="input-box"
                type="checkbox"
                id="color-printing"
                checked={colorPrinting}
                onChange={handleColorPrintingChange}
              />
            </div>

            <div className="total-container">
              <label htmlFor="unit-price" className="align-right">Unit Price: </label>
              <span className="total-amount align-right">₱{additionalCost.toFixed(2)}</span>
            </div>
            <div className="total-container">
              <span className="total-label">Total: </span>
              <span className="total-amount">₱{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default Billing;
