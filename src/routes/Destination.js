import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Destimg from "../assets/4.jpg";
function Destination() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={Destimg}
        title="Destination"
        btnclass="hide"
      />
    </>
  );
}

export default Destination;
