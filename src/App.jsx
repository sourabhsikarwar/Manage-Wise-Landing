import "./App.css";
import { Navbar, Hero } from "./components";
import Explore from "./components/Explore/Explore";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Explore />
      <Faq />
      <Pricing />
      <Testimonial />

      {/* bottom container with cta and footer components */}
      <Footer />
    </div>
  );
}

export default App;
