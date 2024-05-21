import { useContext } from "react";
import UserContext from "../utils/UserContext";
const About = () => {
  const {user}=useContext(UserContext)
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>About DishDash</h1>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <p>
        Welcome to <strong>DishDash</strong>, your go-to app for discovering delicious recipes and managing your culinary adventures. Our mission is to make cooking easy, fun, and accessible to everyone, whether you are a seasoned chef or a kitchen newbie.
      </p>
      <h2>Our Mission</h2>
      <p>
        At DishDash, we believe that everyone should have access to healthy, tasty, and easy-to-make meals. We aim to bring together a community of food enthusiasts who can share and discover new recipes, cooking tips, and food experiences.
      </p>
      <h2>Features</h2>
      <ul>
        <li><strong>Recipe Discovery:</strong> Browse through a vast collection of recipes from various cuisines and dietary preferences.</li>
        <li><strong>Personalized Recommendations:</strong> Get recipe suggestions based on your taste and cooking history.</li>
        <li><strong>Ingredient Search:</strong> Find recipes based on the ingredients you have at hand.</li>
        <li><strong>Meal Planning:</strong> Plan your meals for the week and create shopping lists effortlessly.</li>
        <li><strong>User Community:</strong> Connect with other food lovers, share your recipes, and get feedback.</li>
      </ul>
      <h2>Our Story</h2>
      <p>
        DishDash was born out of a love for food and technology. Our team of food enthusiasts and tech experts came together to create an app that bridges the gap between traditional cooking and modern convenience. We are passionate about making home-cooked meals a delightful experience for everyone.
      </p>
      <h2>Get In Touch</h2>
      <p>
        We love hearing from our users! If you have any questions, suggestions, or feedback, feel free to reach out to us at <a href="mailto:support@dishdash.com">support@dishdash.com</a>. Follow us on social media to stay updated with the latest recipes and app features.
      </p>
    </div>
  );
}

export default About;
