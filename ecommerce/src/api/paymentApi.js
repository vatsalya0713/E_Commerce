const BASE_URL = "http://localhost:9090";



// 🔹 VERIFY PAYMENT
export async function verifyPayment(paymentDetails) {
  const token = localStorage.getItem("jwtToken");

  const response = await fetch(`${BASE_URL}/api/verify-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(paymentDetails),
  });

  return response.text();
}
