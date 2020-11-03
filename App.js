import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
} from "react-native";

//View -> UIView or Android View. React-native does this FOR us.
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        <TouchableHighlight onPress={() => console.log("Image tapped")}>
          <View></View>
        </TouchableHighlight>
        Small text again
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
