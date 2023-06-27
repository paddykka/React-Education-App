import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Serimg from "../assets/7.jpg";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={Serimg}
        title="Service"
        btnclass="hide"
      />
    </>
  );
}

export default Service;
