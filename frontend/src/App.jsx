import { useEffect, useState } from "react";
import { getPayments } from "./api/paymentApi";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";
import "./style.css";

export default function App() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState("");

  const loadPayments = async () => {
    try {
      const data = await getPayments();
      setPayments(Array.isArray(data) ? data : data?.data || []);
    } catch (err) {
      console.error("Failed to load payments:", err);
      setError("Backend not connected, but UI is working.");
      setPayments([]);
    }
  };

  useEffect(() => {
    loadPayments();
  }, []);

  return (
    <main>
      <h1>Simple Payment Service</h1>
      <p>React frontend → FastAPI backend → SQLite database</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <PaymentForm onPaymentCreated={loadPayments} />
      <PaymentList payments={payments} />
    </main>
  );
}