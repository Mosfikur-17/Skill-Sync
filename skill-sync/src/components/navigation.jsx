import { Link } from "react-router-dom";

function navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/htw">How It Works</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>

      <ul className="nav-right">
        <li className="nav-icon">
          <Link to="/notification" title="Notifications">
            <img src="images/icons/ntf.webp" alt="Notifications" className="icon" />
          </Link>
        </li>
        <li className="nav-icon">
          <Link to="/settings" title="Settings">
            <img src="images/icons/sett.webp" alt="Settings" className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navigation;
