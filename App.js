import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import ViewImageScreen from "./app/assets/screens/ViewImageScreen";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";

//View -> UIView or Android View. React-native does this FOR us.
export default function App() {
  return <ViewImageScreen></ViewImageScreen>;

  // return <WelcomeScreen></WelcomeScreen>;
  // <View
  //   style={{
  //     backgroundColor: "#fff",
  //     flex: 1,
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   }}
  // >
  //   <View
  //     style={{
  //       backgroundColor: "dodgerblue",
  //       flexBasis: 100,
  //       flexShrink: 1,
  //       height: 100,
  //     }}
  //   />
  //   <View
  //     style={{
  //       backgroundColor: "gold",
  //       width: 100,
  //       height: 100,
  //     }}
  //   />
  //   <View
  //     style={{
  //       backgroundColor: "tomato",
  //       width: 100,
  //       height: 100,
  //     }}
  //   />
  // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
