import "./CalculationResultTable.module.css";

import CalculationResultRow from "./CalculationResultRow";

const CalculationResultTable = ({ calculationResult }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          {/* <th>{props.calculationResult}</th> */}
        </tr>
      </thead>
      <tbody>
        {!(Object.keys(calculationResult).length === 0) &&
          calculationResult.map((resultItem) => {
            console.log("hello from CalculationResultTable");
            console.log(resultItem);
            return <CalculationResultRow resultItem={resultItem} />;
          })}
      </tbody>
    </table>
  );
};

export default CalculationResultTable;
