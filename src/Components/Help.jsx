
import '../App.css'; // Import the CSS file

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <p>Lets take a step ahead and help you better.</p>
      <div className="faq-section">
        <h2>Partner Onboarding</h2>
        <div className="faq-item">
          <h4>I want to partner my restaurant with Swiggy</h4>
        </div>
        <div className="faq-item">
          <h4>I want to opt out from the Google Reverse</h4>
        </div>
        <div className="faq-item">
          <h4>I have submitted all the documents. How long will it take for the restaurant to go live with Swiggy?</h4>
        </div>
      </div>
    </div>
  );
}

export default Help;
