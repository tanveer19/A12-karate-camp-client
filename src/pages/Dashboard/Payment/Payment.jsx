import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  //   const [cart] = useCart();
  //   const total = cart.reduce((sum, item) => sum + item.price, 0);
  //   const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle
        subHeading="please process"
        heading="payment"
      ></SectionTitle>
      <h2 className="text-2xl">Payment for Summer Camp Karate Class</h2>
      <Elements stripe={stripePromise}>
        {/* <CheckoutForm cart={cart} price={price}></CheckoutForm> */}
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
