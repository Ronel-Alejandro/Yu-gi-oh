import CardInfo from "./components/CardInfo";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PagePerfil from "./pages/PagePerfil";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<CardInfo />} />
          <Route path="/perfil" element={<PagePerfil />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
