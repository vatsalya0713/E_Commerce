const BASE_URL = "http://localhost:9090";

export async function placeOrder(userId, cart, totalAmount) {
  const token = localStorage.getItem("jwtToken");

  // productId -> quantity map
  const productQuantities = {};
  cart.forEach(item => {
    productQuantities[item.id] = item.quantity;
  });

  const response = await fetch(
    `${BASE_URL}/api/orders/place/${userId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        productQuentities: productQuantities,
        totalAmount: totalAmount,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Order saving failed");
  }

  return response.json();
}
