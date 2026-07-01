import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  LoadingScreen: undefined;
  WelcomeScreen: undefined;
  IntroScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  OTPVerificationScreen: undefined;
  ProfileScreen: undefined;
  FaceScreen: undefined;
  FingerScreen: undefined;
  SetPinScreen: undefined;
  HomeScreen: undefined;
  OrderScreen:undefined;
  NotificationScreen:undefined;
  FavoritesScreen:undefined;
  PromotionScreen:undefined;
  Profile:undefined;
  // 👇 ADD THIS (IMPORTANT)
  CategoryScreen: {
    type: string;
  };
  ProductDetail: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  CartScreen: undefined; 
};



export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
