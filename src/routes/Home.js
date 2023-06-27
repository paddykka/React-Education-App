import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Dest from "../components/Destination";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        title="Your Journey Your Story"
        text="choose your plan"
        buttonText="Travel Plan"
        url="/"
        btnclass="show"
      />
      <Dest />
    </>
  );
}

export default Home;
