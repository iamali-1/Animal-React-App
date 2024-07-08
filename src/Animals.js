import "./Animals.css";
import { useState } from "react";
import bird from "./images/bird.png";
import cat from "./images/cat.png";
import cow from "./images/cow.png";
import horse from "./images/horse.jpg";
import gator from "./images/gator.png";
import dog from "./images/dog.png";
import heart from "./images/love-heartsvg.svg";
import { click } from "@testing-library/user-event/dist/click";
const svgMap = {
  bird,
  cat,
  cow,
  horse,
  gator,
  dog,
};
function Animals({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <div className="animal-show" onClick={handleClick}>
        <img className="animal" alt="animal" src={svgMap[type]} />
        <img
          className="heart"
          alt="heart"
          src={heart}
          style={{ width: 10 + 10 * clicks + "px" }}
        />
      </div>
    </>
  );
}
export default Animals;
