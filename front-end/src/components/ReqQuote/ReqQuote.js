import React, { useState } from "react";
import "./ReqQuote.css";

const ReqQuote = () => {
  const [formData, setFormData] = useState({
    title: "",
    productSelection: "",
    quantity: "",
    size: "",
    noOfPly: "",
    paperType: "",
    colorPrinting: "",
    logo: null,
    colorForPly: [], // Use an array to store selected colors
  });

  const [isRequestQuoteVisible, setIsRequestQuoteVisible] = useState(true);
  const [isProductDetailsVisible, setIsProductDetailsVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      logo: file,
    });
  };

  const handlePlyColorChange = (e) => {
    const { value, checked } = e.target;
    let selectedColors = [...formData.colorForPly];

    if (checked) {
      selectedColors.push(value);
    } else {
      selectedColors = selectedColors.filter((color) => color !== value);
    }

    setFormData({
      ...formData,
      colorForPly: selectedColors,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRequestQuoteVisible(false);
    setIsProductDetailsVisible(true);
  };

  return (
    <div className="quote-box">
      <div className="tabs">
        <div
          className={`tab ${isRequestQuoteVisible ? "active" : ""}`}
          onClick={() => {
            setIsRequestQuoteVisible(true);
            setIsProductDetailsVisible(false);
          }}
        >
          Request Quote
        </div>
        <div
          className={`tab ${isProductDetailsVisible ? "active" : ""}`}
          onClick={() => {
            if (isProductDetailsVisible) {
              setIsRequestQuoteVisible(false);
              setIsProductDetailsVisible(true);
            } else {
              alert("Please input data first");
            }
          }}
        >
          Product Details
        </div>
      </div>

      {isRequestQuoteVisible && (
        <div className="quote-tab">
          <h1>Request a Quote</h1>
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <div className="input-box">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="productSelection">Product Selection:</label>
              <div className="input-box">
                <select
                  id="productSelection"
                  name="productSelection"
                  value={formData.productSelection}
                  onChange={handleChange}
                >
                  <option value=" "></option>
                  <option value="Delivery Receipt">Delivery Receipt</option>
                  <option value="Official Receipt">Official Receipt</option>
                  <option value="Collection Receipt">Collection Receipt</option>
                  <option value="Billing Invoice">Billing Invoice</option>
                  <option value="Sales Invoice">Sales Invoice</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <div className="input-box">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="size">Size:</label>
              <div className="input-box">
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                >
                  <option value=" "></option>
                  <option value="Short Paper (8.5 x 11)">
                    Short Paper 8.5 x 11
                  </option>
                  <option value="Long Paper (8.5 x 13)">
                    Long Paper 8.5 x 13
                  </option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="noOfPly">No. Of Ply:</label>
              <div className="input-box">
                <input
                  type="number"
                  id="noOfPly"
                  name="noOfPly"
                  value={formData.noOfPly}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="paperType">Paper Type:</label>
              <div className="input-box">
                <select
                  id="paperType"
                  name="paperType"
                  value={formData.paperType}
                  onChange={handleChange}
                >
                  <option value=" "></option>
                  <option value="Bond Paper">Official Receipt</option>
                  <option value="Colored Bond">Collection Receipt</option>
                  <option value="Onion Skin">Billing Invoice</option>
                  <option value="Newsprint(white)">Newsprint White</option>
                  <option value="Newsprint(colored)"> Newsprint Colored</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="colorPrinting">Color Printing:</label>
              <div className="input-box">
                <input
                  type="text"
                  id="colorPrinting"
                  name="colorPrinting"
                  value={formData.colorPrinting}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="ply-change">
              <label htmlFor="colorForPly">Color Of Ply:</label>
              <div className="input-box">
                <label>
                  <input
                    type="checkbox"
                    name="colorForPly"
                    value="White"
                    checked={formData.colorForPly.includes("White")}
                    onChange={handlePlyColorChange}
                  />
                  White
                </label>
              </div>
              <div className="input-box">
                <label>
                  <input
                    type="checkbox"
                    name="colorForPly"
                    value="Blue"
                    checked={formData.colorForPly.includes("Blue")}
                    onChange={handlePlyColorChange}
                  />
                  Blue
                </label>
              </div>
              <div className="input-box">
                <label>
                  <input
                    type="checkbox"
                    name="colorForPly"
                    value="Pink"
                    checked={formData.colorForPly.includes("Pink")}
                    onChange={handlePlyColorChange}
                  />
                  Pink
                </label>
              </div>
              <div className="input-box">
                <label>
                  <input
                    type="checkbox"
                    name="colorForPly"
                    value="Green"
                    checked={formData.colorForPly.includes("Green")}
                    onChange={handlePlyColorChange}
                  />
                  Green
                </label>
              </div>
              <div className="input-box">
                <label>
                  <input
                    type="checkbox"
                    name="colorForPly"
                    value="Yellow"
                    checked={formData.colorForPly.includes("Yellow")}
                    onChange={handlePlyColorChange}
                  />
                  Yellow
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="logo">Upload Logo:</label>
              <div className="input-box">
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  onChange={handleLogoUpload}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {isProductDetailsVisible && (
        <div className="product-details-tab">
          <h2>Product Details</h2>
          <p>Title: {formData.title}</p>
          <p>Product Selection: {formData.productSelection}</p>
          <p>Quantity: {formData.quantity}</p>
          <p>Size: {formData.size}</p>
          <p>No. Of Ply: {formData.noOfPly}</p>
          <p>Paper Type: {formData.paperType}</p>
          <p>Color Printing: {formData.colorPrinting}</p>
          <p>Color of Ply: {formData.colorForPly.join(", ")}</p>
          <p>Logo: {formData.logo ? formData.logo.name : "No logo uploaded"}</p>
        </div>
      )}
    </div>
  );
};

export default ReqQuote;
