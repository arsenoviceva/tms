import "./App.scss";
import { Hero } from "./app/hero/Hero";
import { Banner } from "./layout/banner/Banner";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
