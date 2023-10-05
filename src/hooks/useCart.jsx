import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://2-21-a12-summer-camp-server.vercel.app/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
