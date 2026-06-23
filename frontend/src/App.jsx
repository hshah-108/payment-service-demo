import { useEffect, useState } from "react";
import { getPayments } from "./api/paymentApi";
import PaymentForm from "./components/PaymentForm";
import "./App.css";

function App() {
  const [payments, setPayments] = useState([]);

  const loadPayments = async () => {
    try {
      const data = await getPayments();
      setPayments(data);
    } catch (error) {
      console.error("Error loading payments:", error);
    }
  };

  useEffect(() => {
    loadPayments();
  }, []);

  return (
    <div className="app">
      <h1>Secure Digital Payment Service</h1>

      <PaymentForm onPaymentCreated={loadPayments} />

      <h2>Payment History</h2>

      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              ${payment.amount} - {payment.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;