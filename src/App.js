import './App.css'
import "../src/sass/custom.scss";
import Header from "./components/shared/header";
import Home from "./pages/home";
import Footer from "./components/shared/footer";
import HomeDetails from "./pages/home-details";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Form from './components/form';
import { useState } from 'react';


function App() {

  const [anyCocktail, setAnyCocktail] = useState("")

const getCocktail = async (cock) => {
  setAnyCocktail(cock)
}

// console.log(anyCocktail)

  return (
    <div className="wrap container-fluid px-md-6">
      <BrowserRouter>
        <Header />
        {/* <Form newCocktail={getCocktail}/> */}
        <Routes>        
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/cocktail/:idDrink' element = {<HomeDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
