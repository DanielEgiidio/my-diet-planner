import { View, Text } from "react-native";
import React from "react";

import { useRouter } from "expo-router";
import Login from "./(auth)/login";
import Home from "./screens/home";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Home />
    </View>
  );
}
