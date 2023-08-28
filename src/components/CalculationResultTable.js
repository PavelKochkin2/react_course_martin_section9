import "./CalculationResultTable.module.css";

import CalculationResultRow from "./CalculationResultRow";

const CalculationResultTable = (props) => {
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
        {/* {props.input.map(row=>(CalculationResultRow))} */}
        <CalculationResultRow />
      </tbody>
    </table>
  );
};

export default CalculationResultTable;
