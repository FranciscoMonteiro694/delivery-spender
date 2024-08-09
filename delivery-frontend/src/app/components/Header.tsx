import { FaCog, FaHome } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrap">
      <div className="logo">
        <FaHome size={30} />
      </div>
      <nav className="nav-wrap">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/dashboard">Dashboard</a>
      </nav>
      <div className="auth-settings">
          <a className="nav-link" href="/login">Log In</a>
        <FaCog size={25} className="settings-icon" />
      </div>
    </header>
  );
}

export default Header;