import React, { useState } from 'react';
import Navhome2 from "./navhome";
import Navbar from "./Navbar";
import axios from 'axios';


const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    token: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/process_payment/', paymentData);
      if (response.data.success) {
        setIsSubmitted(true);
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error('Error submitting payment data:', error);
      setError('An error occurred while submitting payment data.');
    }
  };

  return (
    <>
    <Navhome2/>
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Payment Form</h2>
      {isSubmitted ? (
        <p className="text-green-500 text-center">Payment successful!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block">Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={paymentData.amount}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="token" className="block">Token:</label>
            <input
              type="text"
              id="token"
              name="token"
              value={paymentData.token}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">Submit Payment</button>
        </form>
      )}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}
    </div>
    </>
  );
};

export default PaymentForm;
