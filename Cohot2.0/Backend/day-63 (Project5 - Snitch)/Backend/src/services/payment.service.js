import Razorpay from "razorpay";
import { config } from "../config/config.js";

const razorpay = new Razorpay({
  key_id: config.RAZORPAY_KEY_ID,
  key_secret: config.RAZORPAY_KEY_SECRET,
});

// When user want to make payment, we will create an order.
export const createOrder = async (amount, currency = "INR") => {
  try {
    const options = {
      amount: amount * 100, // Amount in paise (1 INR = 100 paise)
      currency: currency,
    };

    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    throw new Error("Failed to create Razorpay order");
  }
};