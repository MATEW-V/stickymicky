import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/Views/HomeView";
import RegisterView from "../src/Views/RegisterView";
import LoginView from "../src/Views/LoginView";
import MoviesView from "../src/Views/MoviesView";
import GenreLogin from "../src/Views/GenreLogin"
import DetailsView from "../src/Views/DetailsView";
import ErrorView from "../src/Views/ErrorView";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path="genre" element={<GenreLogin />} />
          <Route path=":id" element={<DetailsView />} />
        </Route>
        <Route path = "*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App