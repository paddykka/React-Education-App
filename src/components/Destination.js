import he from "../assets/1.jpg";
import she from "../assets/5.jpg";
import who from "../assets/4.jpg";
import "./Deststyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular destination</h1>
      <p>
        Take Risk and then success is yoursa hellow hellow hellow hellow hellow
        hellow hellow hellowhellow
      </p>
      <div className="first-desc">
        <div className="first-text">
          <h1>Success is not the destination</h1>
          <p>
            Success is not destination.Success does not have full stop , it has
            commas!!! hellow hellow hellow hellow helll
          </p>
        </div>
        <div className="first-img">
          <img alt="Hellow" src={she} />
          <img alt="hellow" src={he} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
