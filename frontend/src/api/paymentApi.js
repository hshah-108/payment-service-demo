const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getPayments() {
  const response = await fetch(`${API_BASE_URL}/payments`);

  if (!response.ok) {
    throw new Error("Failed to fetch payments");
  }

  return response.json();
}

export async function createPayment(paymentData) {
  const response = await fetch(`${API_BASE_URL}/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    throw new Error("Failed to create payment");
  }

  return response.json();
}