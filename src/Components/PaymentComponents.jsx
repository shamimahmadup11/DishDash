import { useState } from 'react';
import '../Payment.css'; 
// import { Navigate } from 'react-router-dom';

function PaymentComponent() {
 
  
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!cardNumber || !expiry || !cvv) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // You can integrate with a payment gateway here
    // For demonstration purposes, I'll just simulate a successful payment
    // Replace this with actual payment gateway integration code

    alert('Payment successful!');
    // Reset form after successful payment
    setCardNumber('');
    setExpiry('');
    setCVV('');
    setErrorMessage('');
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} />
        </div>
        <div>
          <label htmlFor="expiry">Expiration Date</label>
          <input type="text" id="expiry" value={expiry} onChange={handleExpiryChange} />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" value={cvv} onChange={handleCVVChange} />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentComponent;
