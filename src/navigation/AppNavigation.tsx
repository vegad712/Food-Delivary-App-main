import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoadingScreen from "../screens/LoadingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import FaceScreen from "../screens/FaceScreen";
import FingerScreen from "../screens/FingerScreen";
import SetPinScreen from "../screens/SetPinScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import PromotionsScreen from "../screens/PromotionScreen";
import ReviewScreen from "../screens/ReviewScreen";
import CancelOrderScreen from "../screens/CancleOrderScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import LocationSelectScreen from "../screens/LocationSelectScreen";
import AddLocationScreen from "../screens/AddLocationScreen";
import ProfileScreen from "../screens/ProfileScreen";


// YOUR NEW BOTTOM TAB NAVIGATOR
import BottomTabsNavigator from "./BottomTabsNavigator";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoadingScreen">
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
      <Stack.Screen name="FaceScreen" component={FaceScreen} />
      <Stack.Screen name="FingerScreen" component={FingerScreen} />
      <Stack.Screen name="SetPinScreen" component={SetPinScreen} />
      <Stack.Screen name="Profile" component={Profile} />

      {/* ← Home and all bottom tabs inside this */}
      <Stack.Screen name="MainTabs" component={BottomTabsNavigator} />

      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="Promotions" component={PromotionsScreen} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      <Stack.Screen name="CancleOrderScreen" component={CancelOrderScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />


      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="LocationSelectScreen" component={LocationSelectScreen} />
      <Stack.Screen name="AddLocationScreen" component={AddLocationScreen} />
    </Stack.Navigator>
  );
}
