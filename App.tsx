import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "./styles";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-300">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
