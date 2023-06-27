import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AbtImg from "../assets/hel.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImage={AbtImg} title="ABOUT" btnclass="hide" />
    </>
  );
}

export default About;
