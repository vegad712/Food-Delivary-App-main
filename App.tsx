import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation";
import { CartProvider } from "./src/context/CartContext";
import { OrderProvider } from "./src/context/OrderContext";

export default function App() {
  return (
    <OrderProvider>
    <CartProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </CartProvider>
    </OrderProvider>
  );
}
