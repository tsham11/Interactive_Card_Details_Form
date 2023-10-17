import { useState } from "react";
import "./form.css";

function Form(props) {
  const [formErrors, setFormErrors] = useState({});

  function validateForm() {
    const errors = {};

    if (!props.holder) {
      errors.holder = "Can't be blank";
    }

    if (!props.number) {
      errors.number = "Can’t be blank";
    } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(props.number)) {
      errors.number = "Invalid card number format";
    }

    if (!props.month) {
      errors.month = "Can’t be blank";
    } else if (
      !/^\d{2}$/.test(props.month) ||
      props.month < 1 ||
      props.month > 12
    ) {
      errors.month = "Invalid format";
    }

    if (!props.year) {
      errors.year = "Can’t be blank";
    } else if (!/^\d{2}$/.test(props.year)) {
      errors.year = "Invalid format";
    }

    if (!props.cvc) {
      errors.cvc = "Can’t be blank";
    } else if (!/^\d{3}$/.test(props.cvc)) {
      errors.cvc = "Invalid format";
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    //if form is valid
    if (Object.keys(errors).length === 0) {
      props.setConfirmed(true);
    }
  };

  return (
    <form className="form">
      <label htmlFor="holder">Cardholder Name</label>
      <input
        type="text"
        name="holder"
        id="holder"
        value={props.holder}
        onChange={(e) => props.setHolder(e.target.value)}
        placeholder="e.g. Jane Appleseed"
        className={`input-field ${formErrors.holder ? "error" : ""}`}
        required
      />
      {formErrors.holder && (
        <p className="error-message">{formErrors.holder}</p>
      )}
      <label htmlFor="number">Card Number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={props.number
          .replace(/\s/g, "")
          .replace(/(\d{4})/g, "$1 ")
          .trim()}
        onChange={(e) => props.setNumber(e.target.value)}
        placeholder="e.g. 1234 5678 9012 1254"
        maxLength={19}
        className={`input-field ${formErrors.number ? "error" : ""}`}
        required
      />
      {formErrors.number && (
        <p className="error-message">{formErrors.number}</p>
      )}
      <div className="dat">
        <div className="m">
          <label htmlFor="month">Exp. Date (MM/YY)</label>
          <div className="tm">
            <input
              type="text"
              name="month"
              id="month"
              value={props.month}
              onChange={(e) => props.setMonth(e.target.value)}
              placeholder="MM"
              maxLength={2}
              className={`input-field ${formErrors.month ? "error" : ""}`}
              required
            />
            <input
              type="text"
              name="year"
              id="year"
              value={props.year}
              onChange={(e) => props.setYear(e.target.value)}
              placeholder="YY"
              maxLength={2}
              className={`input-field ${formErrors.year ? "error" : ""}`}
              required
            />
          </div>
          <div className="my-er">
            {formErrors.month && (
              <p className="error-message">{formErrors.month}</p>
            )}
            {formErrors.year && (
              <p className="error-message">{formErrors.year}</p>
            )}
          </div>
        </div>
        <div className="cvc">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            name="cvc"
            id="cvc"
            value={props.cvc}
            onChange={(e) => props.setCvc(e.target.value)}
            placeholder="e.g. 123"
            maxLength={3}
            className={`input-field ${formErrors.cvc ? "error" : ""}`}
            required
          />
          {formErrors.cvc && <p className="error-message">{formErrors.cvc}</p>}
        </div>
      </div>
      <button type="button" onClick={handleSubmit}>
        Confirm
      </button>
    </form>
  );
}

export default Form;
