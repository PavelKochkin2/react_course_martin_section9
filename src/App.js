import logo from "./assets/investment-calculator-logo.png";
import CalculationResultTable from "./components/CalculationResultTable";
import InvestmentsForm from "./components/InvestmentsForm";
import { useState } from "react";
function App() {
  const [calculationResult, setCalculationResult] = useState({});

  const handleCalculationResult = (result) => {
    setCalculationResult(result);
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      {/* todo: get calculation result from the form below and pass it to result table */}
      <InvestmentsForm handleCalculationResult={handleCalculationResult} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <CalculationResultTable calculationResult={calculationResult} />
    </div>
  );
}

export default App;
