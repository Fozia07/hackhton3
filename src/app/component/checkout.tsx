"use client";

import { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Step Progress */}
      <div className="flex justify-between mb-6">
        <span className={`font-bold ${step >= 1 ? "text-blue-600" : "text-gray-400"}`}>Cart</span>
        <span className={`font-bold ${step >= 2 ? "text-blue-600" : "text-gray-400"}`}>Shipping</span>
        <span className={`font-bold ${step >= 3 ? "text-blue-600" : "text-gray-400"}`}>Payment</span>
        <span className={`font-bold ${step >= 4 ? "text-blue-600" : "text-gray-400"}`}>Confirm</span>
      </div>

      {/* Step 1: Cart Review */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">🛒 Cart Review</h2>
          <p className="text-gray-600">item add in your cart.</p>
          <button onClick={nextStep} className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md">
            Proceed to Shipping →
          </button>
        </div>
      )}

      {/* Step 2: Shipping Details */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">📦 Shipping Details</h2>
          <input type="text" name="name" placeholder="Full Name" className="input-field" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" className="input-field" onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" className="input-field" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" className="input-field" onChange={handleChange} />
          <input type="text" name="postalCode" placeholder="Postal Code" className="input-field" onChange={handleChange} />
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="text-gray-500">← Back</button>
            <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded-md">Proceed to Payment →</button>
          </div>
        </div>
      )}

      {/* Step 3: Payment Details */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">💳 Payment Details</h2>
          <input type="text" name="cardNumber" placeholder="Card Number" className="input-field" onChange={handleChange} />
          <input type="text" name="expiration" placeholder="Expiration Date (MM/YY)" className="input-field" onChange={handleChange} />
          <input type="text" name="cvv" placeholder="CVV" className="input-field" onChange={handleChange} />
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="text-gray-500">← Back</button>
            <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded-md">Review Order →</button>
          </div>
        </div>
      )}

      {/* Step 4: Order Confirmation */}
      {step === 4 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">✅ Confirm Order</h2>
          <p className="text-gray-600">Review your order before placing it.</p>
          <p className="mt-2"><strong>Name:</strong> {formData.name}</p>
          <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.postalCode}</p>
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="text-gray-500">← Back</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md">Place Order ✅</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
