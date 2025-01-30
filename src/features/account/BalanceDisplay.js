import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const fullName = useSelector((state) => state.account.fullName);
  return <div className="balance">{formatCurrency(fullName)}</div>;
}

export default BalanceDisplay;
