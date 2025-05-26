import './Header.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useRef } from "react";

function Header() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    const handleSearch = useCallback(
        debounce((query) => {
            if (query.trim()) {
                navigate(`/movies/search?query=${encodeURIComponent(query)}`);
            }
        }, 400),
        [navigate]
    );

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch(message);
        }
    };

    return (
        <div className="header">
            <div className="header-logo">
                <Link to={`/`} className="header-logo">DebtFlix</Link>
            </div>
            <div className="subheaders2">
                <div className="subheader-items2">
                    <h1>Recent</h1>
                </div>
                <div className="subheader-items2">
                    <h1>Popular</h1>
                </div>
                <div className="search">
                    <div className="searchbox">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
                <Link to={`/settings`} className="login">Settings</Link>
                <Link to={`/cart`} className="register">Cart</Link>
                <Link to={`/`} className="register">Logout</Link>
            </div>
        </div>
    )
}

export default Header;