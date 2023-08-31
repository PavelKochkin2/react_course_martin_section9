import { useState } from "react";
import "./InvestmentsForm.module.css";

const defaultState = {
  currentSavings: 15000,
  yearlyContribution: 1700,
  expectedReturnRatePercentage: 7,
  // investmentDurationYears: 10,
  durationYears: 10,
};

const InvestmentsForm = (props) => {
  const [formState, setFormState] = useState(defaultState);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = formState.currentSavings;
    const yearlyContribution = formState.yearlyContribution;
    const expectedReturn = formState.expectedReturnRatePercentage / 100;
    const duration = formState.durationYears;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    console.log(yearlyData);

    props.handleCalculationResult(yearlyData);
  };

  const onCancel = () => {
    setFormState(defaultState);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateHandler(event);
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
        return { ...prevState, expectedReturnRatePercentage: newValue };
      });
    } else if (event.target.id === "duration") {
      setFormState((prevState) => {
        return { ...prevState, durationYears: newValue };
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
            value={formState.expectedReturnRatePercentage}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={formState.durationYears} />
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
