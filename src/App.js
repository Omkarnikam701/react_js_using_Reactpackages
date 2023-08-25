import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/products/Product";
import Slider from "./components/slider/Slider";
import Testominal from "./components/testominal.js/Testominal";
import Virtuals from "./components/virtual/Virtuals";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtuals/>
      <Product/>
      <Testominal/>
      <Footer/>
    </div>
  );
}

export default App;
