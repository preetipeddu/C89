import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import firebase from "firebase";
import { firebaseConfig } from "./config";

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  DashboardScreen: DashboardScreen,
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator/>
  );
}