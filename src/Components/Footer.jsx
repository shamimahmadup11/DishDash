


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">Food Website</h2>
            <p>This is a food website that provides delicious recipes and food-related content.</p>
            <div className="socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form action="#">
              <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
              <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Food Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
