export default function PaymentList({ payments }) {
  return (
    <div className="card">
      <h2>Payment History</h2>
      {payments.length === 0 ? <p>No payments yet.</p> : null}
      {payments.map((payment) => (
        <div className="payment" key={payment.id}>
          <strong>{payment.sender} → {payment.receiver}</strong>
          <span>${payment.amount}</span>
          <span className={payment.status === "SUCCESS" ? "success" : "rejected"}>{payment.status}</span>
        </div>
      ))}
    </div>
  );
}
