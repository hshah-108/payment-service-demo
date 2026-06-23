const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

fetch(`${API_BASE_URL}/payments`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Idempotency-Key": crypto.randomUUID()
  },
  body: JSON.stringify({
    sender: "Harsh",
    receiver: "Demo User",
    amount: 50
  })
});