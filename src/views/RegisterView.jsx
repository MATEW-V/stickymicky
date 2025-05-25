import './RegisterView.css'
import Footer from './components/Footer.jsx';
import Header from "./components/Header.jsx";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useStoreContext } from '../context';

function RegisterView() {
   const { setEmail: setContextEmail, setFirst, setLast, setPassword: setContextPassword, setGenres } = useStoreContext();
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [verifpass, setVerifpass] = useState('');
  const [selectedGenres, setSelectedGenres] = useState(new Map()); // Use a Map to store genre selections
  const navigate = useNavigate();

  const availableGenres = [
    { id: "28", name: "Action" },
    { id: "12", name: "Adventure" },
    { id: "16", name: "Animation" },
    { id: "80", name: "Crime" },
    { id: "35", name: "Comedy" },
    { id: "27", name: "Horror" },
    { id: "36", name: "History" },
    { id: "14", name: "Fantasy" },
    { id: "53", name: "Thriller" },
    { id: "37", name: "Western" },
    { id: "10751", name: "Family" },
    { id: "10402", name: "Music" },
    { id: "10752", name: "War" },
    { id: "9648", name: "Mystery" },
    { id: "878", name: "Sci-Fi" }
  ];

   const handleGenreChange = (event) => {
    const genreId = event.target.value;
    const genreName = event.target.dataset.name;

    setSelectedGenres(prevSelectedGenres => {
      const newGenres = new Map(prevSelectedGenres); 
      if (newGenres.has(genreId)) {
        newGenres.delete(genreId); 
      } else {
        newGenres.set(genreId, genreName); 
      }
      return newGenres;
    });
  };

  function signup(event) {
    event.preventDefault();

    if (password !== verifpass) {
      alert("Passwords do not match!");
      return;
    }

    if (selectedGenres.size < 10) {
      alert("Please select at least 10 genres.");
      return;
    }

    setFirst(fname);
    setLast(lname);
    setContextEmail(email);
    setContextPassword(password);
    setGenres(selectedGenres);  
    navigate('/movies/genre');
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