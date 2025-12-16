import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { fetchUserProfile } from "../api/authApi";
import { verifyPayment } from "../api/paymentApi";
import { placeOrder } from "../api/orderApi";

function Cart() {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function startPayment() {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      alert("Please login first!");
      return;
    }

    const user = await fetchUserProfile(token);

    // ✅ Razorpay Options (NO backend create-order)
    const options = {
      key: "rzp_test_RF6hzq0v3uw8Ej",
      amount: totalAmount * 100, // paise
      currency: "INR",
      name: "Shoplane",
      description: "Order Payment",

      prefill: {
        name: user.name,
        email: user.email,
        contact: user.contact,
      },

      handler: async function (response) {
        const res = await verifyPayment(response);

        if (res.includes("successful")) {
          await placeOrder(user.id, cart, totalAmount);
          alert("Payment Successful & Order Placed!");
        } else {
          alert("Payment Failed!");
        }
      },
    };

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    new window.Razorpay(options).open();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow-md rounded-xl p-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price}</p>
                  <p className="mt-1">Qty: {item.quantity}</p>
                </div>

                <p className="font-semibold text-lg">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total Amount:</span>
              <span className="font-bold">₹{totalAmount}</span>
            </div>

            <button
              onClick={startPayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              Proceed to Payment →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
