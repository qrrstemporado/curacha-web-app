import React, { useState } from 'react';
import NavBar from '../../../../components/Navbar/Navbar';
import FooterPage from '../../../FooterPage/FooterPage';
import './Cash-Invoice.css';
import cash from '../../../../assets/cash-quote.svg';
import half1 from '../../../../assets/one-half.svg';
import forth1 from '../../../../assets/one-fourth.svg';


const Cash = () => {
  const [quantity, setQuantity] = useState(false);
  const [unitPrice] = useState(134.5);
  const [size, setSize] = useState('');
  const [numberOfPly, setNumberOfPly] = useState(false);
  const [paperType, setPaperType] = useState('');
  const [colorPrinting, setColorPrinting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
  };

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSize(newSize);
  };

  const handleNumberOfPlyChange = (event) => {
    const newNumberOfPly = Number(event.target.value);
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

  const total = (quantity * unitPrice).toFixed(2);

  const images = [cash, half1, forth1];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div><NavBar />
    <div className="cashContainer">
    <div className="main-container">
      <div className="product-info">
        <div className="image-container">
          <button className="nav-button left" onClick={handlePrevImage}>&lt;</button>
          <img src={images[currentImageIndex]} alt="Product" className="product-image" />
          <button className="nav-button right" onClick={handleNextImage}>&gt;</button>
        </div>
        <h1 className="red-title">Cash Invoice</h1>
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
            <option value="Onion Skin (Bond top layer)">Onion Skin (Bond top layer)</option>
            <option value="Newsprint (white)">Newsprint (white)</option>
            <option value="Newsprint (colored)">Newsprint (colored)</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="color-printing">Color Printing:</label>
          <input
            className="input-box"
            type="text"
            id="color-printing"
            checked={colorPrinting}
            onChange={handleColorPrintingChange}
          />
        </div>

        <div className="total-container">
          <label htmlFor="unit-price" className="align-right">Unit Price: </label>
          <span className="total-amount align-right">₱{unitPrice.toFixed(2)}</span>
        </div>
        <div className="total-container">
          <span className="total-label">Total: </span>
          <span className="total-amount">₱{total}</span>
        </div>
      </div>
    </div>
    </div>
    <FooterPage />
    </div>
  );
};

export default Cash;


