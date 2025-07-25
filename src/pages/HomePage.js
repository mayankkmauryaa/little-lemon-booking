import { Link } from 'react-router-dom';
import './HomePage.css';

function Homepage() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to Little Lemon 🍋</h1>
        <p>Your favorite place for Mediterranean cuisine.</p>
        <Link to="/booking">
          <button className="cta-button">Book a Table</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
