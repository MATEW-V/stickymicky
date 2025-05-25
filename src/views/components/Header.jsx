import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>DebtFlix</h1>
            </div>
            <div className="subheaders2">
                <div className="subheader-items2">
                    <h1>Movies</h1>
                </div>
                <div className="subheader-items2">
                    <h1>TV shows</h1>
                </div>
                <div className="subheader-items2">
                    <h1>Popular</h1>
                </div>
                <div className="subheader-items2">
                    <h1>Recent</h1>
                </div>
                {/* set links */}
                <Link to={`/settings`} className="login">Settings</Link>
                <Link to={`/cart`} className="register">Cart</Link>
                <Link to={`/register`} className="register">Logout</Link>
            </div>
        </div>
    )
}

export default Header;