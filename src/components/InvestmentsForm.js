import { useState } from "react";
import "./InvestmentsForm.module.css";

const defaultState = {
  currentSavings: 15000,
  yearlyContribution: 1700,
  expectedInterests: 7,
  investmentDurationYears: 10,
};

const InvestmentsForm = (props) => {
  const [formState, setFormState] = useState(defaultState);

  const onCancel = () => {
    alert("cancel");
  };

  const onSubmit = (event) => {
    console.log(props.calculateHandler);
    props.calculateHandler(event);
  };

  const onChange = (event) => {
    const newValue = event.target.value;
    if (event.target.id === "current-savings") {
      setFormState((prevState) => {
        return { ...prevState, currentSavings: newValue };
      });
    } else if (event.target.id === "yearly-contribution") {
      setFormState((prevState) => {
        return { ...prevState, yearlyContribution: newValue };
      });
    } else if (event.target.id === "expected-return") {
      setFormState((prevState) => {
        return { ...prevState, expectedInterests: newValue };
      });
    } else if (event.target.id === "duration") {
      setFormState((prevState) => {
        return { ...prevState, investmentDurationYears: newValue };
      });
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} onChange={onChange}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formState.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formState.yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formState.expectedInterests}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formState.investmentDurationYears}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onCancel}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentsForm;
