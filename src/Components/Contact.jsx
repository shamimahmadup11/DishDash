import { useState } from "react";
import '../footer.css'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  };

  return (
      <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>
   
  )
}

export default Contact
