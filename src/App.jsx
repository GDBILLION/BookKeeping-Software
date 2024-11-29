import "./App.css";
import BusinessTask from "./components/BusinessTask";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <BusinessTask />
      <GetStarted />
      <Testimonial />
      <Pricing />
      <FrequentlyAskedQuestion />
      <Footer />
    </>
  );
}

export default App;
