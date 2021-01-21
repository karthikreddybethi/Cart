import React from "react";
import { CartDataProvider } from "./CartContext";
import CartPage from "./CartPage";

export default function App() {
  return (
    <CartDataProvider>
      <CartPage />
    </CartDataProvider>
  );
}
