import "./confirm.css";
import Complete from "../../assets/icon-complete.svg";

function Confirm({ setConfirmed }) {
  return (
    <div className="complete">
      <img src={Complete} alt="icon-compplete" id="compl-icon" />
      <h1>THANK YOU!</h1>
      <p id="dtl">We’ve added your card details</p>
      <button onClick={() => setConfirmed(false)}>Continue</button>
    </div>
  );
}

export default Confirm;
