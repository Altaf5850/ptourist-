import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
    bankName: "",
    walletName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Confirmation using ${selectedMethod}`);
    navigate("/confirmation");
  };

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case "UPI":
        return (
          <form onSubmit={handleSubmit} className="mb-4">
            <label className="block text-gray-700">UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={paymentDetails.upiId}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded w-full hover:scale-95 duration-200"
            >
              Pay
            </button>
          </form>
        );
      case "Credit/Debit Card":
        return (
          <form onSubmit={handleSubmit} className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded w-full hover:scale-95 duration-200"
            >
              Pay
            </button>
          </form>
        );
      case "Net Banking":
        return (
          <form onSubmit={handleSubmit} className="mb-4">
            <label className="block text-gray-700">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={paymentDetails.bankName}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded w-full hover:scale-95 duration-200"
            >
              Pay
            </button>
          </form>
        );
      case "Wallets":
        return (
          <form onSubmit={handleSubmit} className="mb-4">
            <label className="block text-gray-700">Wallet Name</label>
            <input
              type="text"
              name="walletName"
              value={paymentDetails.walletName}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded w-full hover:scale-95 duration-200"
            >
              Pay
            </button>
          </form>
        );
      case "Cash on Delivery":
        return (
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-green-500 text-white py-2 px-4 rounded w-full hover:scale-95 duration-200"
          >
            Confirm Order
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-28 font-josefin">
      <h2 className="text-2xl font-bold pt-8 mb-4 text-center">Payment Mode</h2>
      <div className="max-w-lg mx-auto bg-white p-8 md:p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Choose a payment method</h3>
        <div className="mb-4">
          <button
            className="w-full p-4 border rounded bg-gray-200 mb-2 hover:scale-95 duration-200 ease-in"
            onClick={() => setSelectedMethod("UPI")}
          >
            UPI
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png"
              alt="img"
              className="w-20 object-center ml-40"
            />
          </button>
          <button
            className="w-full p-4 border rounded bg-gray-200 mb-2 hover:scale-95 duration-200 ease-in"
            onClick={() => setSelectedMethod("Credit/Debit Card")}
          >
            Credit/Debit Card
            <img
              src="https://thumbs.dreamstime.com/b/delhi-india-february-popular-credit-card-companies-logos-including-mastercard-visa-american-express-more-211749084.jpg"
              alt="img"
              className="w-20 h-10 object-center ml-40"
            />
          </button>
          <button
            className="w-full p-4 border rounded bg-gray-200 mb-2 hover:scale-95 duration-200 ease-in"
            onClick={() => setSelectedMethod("Net Banking")}
          >
            Net Banking
            <img
              src="https://e7.pngegg.com/pngimages/983/378/png-clipart-computer-icons-internet-banking.png"
              alt="img"
              className="w-20 h-10 object-center ml-40"
            />
          </button>
          <button
            className="w-full p-4 border rounded bg-gray-200 mb-2 hover:scale-95 duration-200 ease-in"
            onClick={() => setSelectedMethod("Wallets")}
          >
            Wallets
            <img
              src="https://w7.pngwing.com/pngs/211/190/png-transparent-computer-icons-wallet-money-business-card-rectangle-logo-area.png"
              alt="img"
              className="w-20 h-10 object-center ml-40"
            />
          </button>
          <button
            className="w-full p-4 border rounded bg-gray-200 mb-2 hover:scale-95 duration-200 ease-in"
            onClick={() => setSelectedMethod("Cash on Delivery")}
          >
            Cash on Delivery
            <img
              src="https://w7.pngwing.com/pngs/510/354/png-transparent-food-indian-cuisine-bangladeshi-cuisine-devops-dubai-cash-on-delivery.png"
              alt="img"
              className="w-20 h-10 object-center ml-40"
            />
          </button>
        </div>
        {selectedMethod && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-4">
              {selectedMethod} Details
            </h3>
            {renderPaymentForm()}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
