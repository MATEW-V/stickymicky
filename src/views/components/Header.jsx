import './Header.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useStoreContext } from "../context";
// import { Map } from "immutable";
// import { useState, useCallback, useRef } from "react";

function Header() {
    // const { name, setName, setLastName, setEmail, setPassword, selectedGenres, setSelectedGenres, setCart, loggedIn, setLoggedIn } = useStoreContext();
    // const navigate = useNavigate();
    // const [query, setQuery] = useState("");
    // const debounceTimer = useRef(null);
    // const [results, setResults] = useState([]);

    // const handleSearchChange = useCallback((e) => {
    //     const value = e.target.value;
    //     setQuery(value);
    //     clearTimeout(debounceTimer.current);

    //     debounceTimer.current = setTimeout(() => {
    //         if (value.trim()) {
    //             fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${encodeURIComponent(value)}&include_adult=false`)
    //                 .then((res) => res.json())
    //                 .then((data) => {
    //                     if (data.results) {
    //                         setResults(data.results.slice(0, 5));
    //                     }
    //                 })
    //                 .catch((err) => {
    //                     console.error("Search failed:", err);
    //                     setResults([]);
    //                 });
    //         } else {
    //             setResults([]);
    //         }
    //     }, 500);
    // }, []);

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
                        <input type="text" placeholder="Search..." />
                    </div>
                    <button className="butsearch">Search</button>
                </div>
                <Link to={`/settings`} className="login">Settings</Link>
                <Link to={`/cart`} className="register">Cart</Link>
                <Link to={`/register`} className="register">Logout</Link>
            </div>
        </div>
    )
}

export default Header;