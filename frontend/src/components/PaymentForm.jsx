import { useState } from "react";
import { createPayment } from "../api/paymentApi";

export default function PaymentForm({ onPaymentCreated }) {
  const [form, setForm] = useState({
    sender: "Harsh",
    receiver: "Alex",
    amount: 100,
    idempotency_key: crypto.randomUUID()
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPayment({ ...form, amount: Number(form.amount) });
    setForm({ ...form, amount: 100, idempotency_key: crypto.randomUUID() });
    onPaymentCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Create Payment</h2>
      <input name="sender" value={form.sender} onChange={handleChange} placeholder="Sender" />
      <input name="receiver" value={form.receiver} onChange={handleChange} placeholder="Receiver" />
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" />
      <button type="submit">Pay</button>
      <p className="hint">Payments over $5,000 are rejected by a simple demo fraud rule.</p>
    </form>
  );
}
