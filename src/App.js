import logo from "./assets/investment-calculator-logo.png";
import CalculationResultTable from "./components/CalculationResultTable";
import InvestmentsForm from "./components/InvestmentsForm";
function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      {/* todo: get calculation result from the form below and pass it to result table */}
      <InvestmentsForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <CalculationResultTable />
    </div>
  );
}

export default App;
