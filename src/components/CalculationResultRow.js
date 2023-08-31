import "./CalculationResultRow.module.css";

const CalculationResultRow = ({ resultItem }) => {
  if (!resultItem) return "Empty";
  return (
    <tr>
      <td>{resultItem.year}</td>
      <td>{resultItem.savingsEndOfYear.toFixed(2)}</td>
      <td>{resultItem.yearlyInterest.toFixed(2)}</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );
};

export default CalculationResultRow;
