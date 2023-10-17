import Front from "../../assets/bg-card-front.png";
import Back from "../../assets/bg-card-back.png";
import Oval from "../../assets/card-logo.svg";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img src={Front} id="frontImg" alt="front-part" />
        <div className="text">
          <img src={Oval} alt="oval" id="oval" />
          <p className="card-num">
            {props.number ? props.number : "0000 0000 0000 0000"}
          </p>
          <div className="name-date">
            <p className="card-name">
              {props.holder ? props.holder : "JANE APPLESEED"}
            </p>
            <p className="card-date">
              {props.month ? props.month : "00"}/
              {props.year ? props.year : "00"}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={Back} id="backImg" alt="back" />
        <div className="text-1">
          <p className="card-cvc">{props.cvc ? props.cvc : "000"}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
