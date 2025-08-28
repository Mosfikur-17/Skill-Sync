import { Link } from "react-router-dom";

function matha() {
  return (
    <header className="header">
      <h1>Welcome to Skill Sync</h1>
      <h1>AI-Powered</h1>
      <h1>Career Pathway Advisor</h1>
      <Link to="/login" className="cta-btn">Get Started</Link>
    </header>
  );
}

export default matha;
