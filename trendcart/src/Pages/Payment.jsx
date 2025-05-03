import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "../Styling/Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount = 0, userDetails = {} } = location.state || {};

  const [showQRCode, setShowQRCode] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [formData, setFormData] = useState({
    name: userDetails.name || "",
    address: userDetails.address || "",
    contact: userDetails.contact || "",
    city: userDetails.city || "",
    cityCode: userDetails.cityCode || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (method) => {
    // Basic validation before proceeding
    if (Object.values(formData).some((val) => val.trim() === "")) {
      alert("Please fill in all shopping details before proceeding.");
      return;
    }

    setSelectedPaymentMethod(method);
    if (method === "QR Code") {
      setShowQRCode(true);
    } else {
      alert(`Payment successful using ${method}`);
      navigate("/"); // Redirect after payment
    }
  };

  return (
    <div className="payment-page">
      <div className="top-bottom">
        <div className="top">
          <h2>💳 Secure Payment</h2>
          <p className="total-amount">
            Total Amount: <strong>₹{totalAmount.toFixed(2)}</strong>
          </p>

          {/* 🛒 User Shopping Details (Editable) */}
          <div className="user-details">
            <h4>🧾 Shopping Details</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="cityCode"
              placeholder="City Code"
              value={formData.cityCode}
              onChange={handleInputChange}
            />
          </div>

          {selectedPaymentMethod && selectedPaymentMethod !== "QR Code" && (
            <p className="payment-confirmation">
              <strong>Payment Method:</strong> {selectedPaymentMethod}
            </p>
          )}
        </div>

        <div className="bottom">
          <div className="payment-options">
            <button
              onClick={() => handlePayment("Credit Card")}
              className="payment-btn"
            >
              💳 Credit Card
            </button>
            <button
              onClick={() => handlePayment("Debit Card")}
              className="payment-btn"
            >
              🏦 Debit Card
            </button>
            <button
              onClick={() => handlePayment("UPI")}
              className="payment-btn"
            >
              📱 UPI
            </button>
            <button
              onClick={() => handlePayment("Net Banking")}
              className="payment-btn"
            >
              🌐 Net Banking
            </button>
            <button onClick={() => handlePayment("QR Code")} className="qr-btn">
              📷 Pay via QR Code
            </button>
          </div>

          {showQRCode && (
            <div className="qr-section">
              <h3>Scan QR Code to Pay</h3>
              <QRCodeCanvas
                value={`upi://pay?pa=your-upi-id@upi&pn=${formData.name}&am=${totalAmount}&cu=INR`}
                size={180}
              />
              <p>Use any UPI app to scan and pay</p>
              <p>
                <strong>Amount:</strong> ₹{totalAmount.toFixed(2)}
              </p>
              <p>
                <strong>Payee:</strong> {formData.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
