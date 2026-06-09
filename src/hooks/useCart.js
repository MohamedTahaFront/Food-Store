import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useCart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      toast.warning(`${product.title} is already in the cart`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`${product.title} added to cart successfully`);
    }
  };
  const deleteProduct = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    toast.error(`${product.title} removed from cart`);
  };
  const increase = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(newCart);
  };
  const decrease = (id) => {
    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCart(newCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, addToCart, deleteProduct, increase, decrease };
};
