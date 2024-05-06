import  { useState } from 'react';
import '../Payment.csss'

function PaymentComponent() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

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
    
   alert("Payment has been done")
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
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentComponent;
