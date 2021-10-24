import PropTypes from "prop-types";
import s from './TransactionHistory.module.css';
import TransactionItem from './TransactionItem';

function TransactionHistory({items}) {
    return (
<table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(el => (
      <tr key={el.id}>
        <TransactionItem
            type={el.type}
            amount={el.amount}
            currency={el.currency}
        />
      </tr>))}
  </tbody>
</table>
    )
}
TransactionHistory.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}
export default TransactionHistory;