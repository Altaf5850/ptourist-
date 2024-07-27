import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="container bg-green-500 mx-auto px-4 py-8 pt-28 font-josefin">
      <h2 className="text-2xl font-bold pt-7 mb-4 text-center">
        Payment Successful
      </h2>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-center">
          Thank you for your purchase! Your payment was successful.
        </p>
      </div>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-center block w-full hover:scale-95 duration-200 ease-in"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;
