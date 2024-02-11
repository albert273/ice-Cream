import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";
import Dishes from "./components/Dishes/Dishes";
import About from "./components/about/About";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Dishes />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
