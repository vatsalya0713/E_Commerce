import { useState } from "react";
import { registerUser } from "../api/authApi";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    contact: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const result = await registerUser(formData);
      setMessage(`User '${result.username}' registered successfully!`);
    } catch {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input id="name" className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input id="username" className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input id="contact" className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input id="email" className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input id="password" type="password" className="input-field" onChange={handleChange} />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-red-600">{message}</p>
      </div>
    </div>
  );
}

export default Register;
