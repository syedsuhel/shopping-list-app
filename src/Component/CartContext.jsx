import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
    const [order,setOrder]=useState([])


 

  // add or update item in cart

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      // for existingitem
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // if product already in cart , then update qty
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        // Add new product to cart
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  //Remove item from cart
  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  // Update item quantity

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      );
    }
  };

   // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

//   save Order
  const placeOrder=()=>{
    setOrder(cartItems)
  }


  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };


  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        updateQuantity,
        removeItem,
        placeOrder,
        order,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
