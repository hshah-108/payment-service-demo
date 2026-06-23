import { useEffect, useState } from "react";
import { getPayments } from "./api/paymentApi";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";
import "./style.css";

export default function App() {
  const [payments, setPayments] = useState([]);

  const loadPayments = async () => {
    const response = await getPayments();
    setPayments(response.data);
  };

  useEffect(() => {
    loadPayments();
  }, []);

  return (
    <main>
      <h1>Simple Payment Service</h1>
      <p>React frontend → FastAPI backend → SQLite database</p>
      <PaymentForm onPaymentCreated={loadPayments} />
      <PaymentList payments={payments} />
    </main>
  );
}
