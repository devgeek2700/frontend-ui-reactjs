import './App.css';
// import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './components/Navbar';
import Features from './Features';
import Admin from './Admin';
import Card from './Card';
import Reviews from './Reviews';
import Pricing from './Pricing';
import Footer from './components/Footer';
import FQuestions from './FQuestions';
import Ready from './Ready';
import framertxt from "./components/Images/framertxt.png"


const App = () => {
  return (
    <>
      <Navbar />

      {/* Float Buttons */}
      <a href="https://pierrejacquel.lemonsqueezy.com/checkout" class="float slide_up_f1"> Buy this template for $49</a>
      <a href="https://pierrejacquel.lemonsqueezy.com/checkout" class="float slide_up_f2" id='float2'>
        <img src={framertxt} alt="" width="150px" height="30px" />
      </a>



      <Home />
      <Admin />
      <Features />
      <Card />
      <Reviews />
      <Pricing />
      <FQuestions />
      <Ready />
      <Footer />

  
    </>

  );
};

export default App;
