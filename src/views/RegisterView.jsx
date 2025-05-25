import './RegisterView.css'
import Footer from './components/Footer.jsx';
import Header from "./components/Header.jsx";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegisterView() {
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const navigate = useNavigate();

    function register(e) {
        e.preventDefault();

        if( password === passwordCheck){
            navigate('/login');
        } else {
            alert("Wrong password!");
        }
    }

    return (
        <form onSubmit={(e) => { register(e) }}>
                <div className="register-header">
                    <Header />
                </div>
            <div className="register-view">
                {/* <img className="register-background" src={image} /> */}
                <div className="register-box">
                    <h4 className="register-input-text">First name:</h4>
                    <input className="first-name" type="text" required/>
                    <h4 className="register-input-text">Last name:</h4>
                    <input className="last-name" type="text" required/>
                    <h4 className="register-input-text">Email:</h4>
                    <input className="new-email" type="email" required/>
                    <h4 className="register-input-text">Password:</h4>
                    <input type="password" id="password" name="password" onChange={(event) => { setPassword(event.target.value) }} required />
                    <h4 className="register-input-text">Confirm password:</h4>
                    <input type="password" id="passwordconfirm  " name="passwordconfirm" onChange={(event) => { setPasswordCheck(event.target.value) }} required />
                    <button className="register-button">register</button>
                </div>
            </div>
                <div className="register-footer">
                    <Footer />
                </div>
        </form>
    )
}

export default RegisterView;