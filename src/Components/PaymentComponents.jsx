import { useState } from 'react';
import '../Payment.css'; 

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

  
    if (!cardNumber || !expiry || !cvv) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    alert('Payment successful!');
    // Reset form after successful payment
    setCardNumber('');
    setExpiry('');
    setCVV('');
    setErrorMessage('');
  };

  return (
    <div className='paymentmethod'>
      <h2>Payment Information</h2>
      <form className='formhandle' onSubmit={handleSubmit}>
        <div className='div'>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" className='inputHndle' value={cardNumber} onChange={handleCardNumberChange} />
        </div>
        <div className='div'>
          <label htmlFor="expiry">Expiration Date</label>
          <input type="text" id="expiry"  className='inputHndle' value={expiry} onChange={handleExpiryChange} />
        </div>
        <div className='div'>
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv"  className='inputHndle' value={cvv} onChange={handleCVVChange} />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentComponent;
