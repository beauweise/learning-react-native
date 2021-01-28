import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import {useDimensions, useDeviceOrientation,
} from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {

  return (
    <ViewImageScreen/>
  // <WelcomeScreen/>
);
}
