import './LoginView.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './images/one-piece.PNG'
import Footer from './components/Footer.jsx';
import Header from "./components/Header.jsx";

function LoginView() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(e) {

        e.preventDefault();
        if (password === "goodpassword") {
            navigate('/movies/genre');
        } else {
            alert("Wrong password!");
        }
    }

    return (
        <form onSubmit={(event) => { login(event) }}>
            <div className="login-header">
                <Header />
            </div>
            <div className="login-view">
                {/* <img className="login-background" src={image} /> */}
                <div className="login-box">
                    <h4 className="input-text">Email:</h4>
                    <input className="email" type="email" required/>
                    <h4 className="input-text">Password:</h4>
                    <input className="password" type="password" id="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                    <button className="login-button">Login</button>
                </div>
            </div>
            <div className="login-footer">
                <Footer />
            </div>
        </form>
    )
}

export default LoginView;