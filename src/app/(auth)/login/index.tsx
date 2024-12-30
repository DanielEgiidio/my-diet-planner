import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";
import { Button } from "@/src/components/Button";
import { GoogleIcon } from "../../assets/icons/Icons";

import { styles } from "./styles";

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>MyDietPlanner</Text>

        <Button
          title="Entrar com Google"
          icon={<GoogleIcon />}
          onPress={() => console.log("Google login pressed")}
          style={{ marginBottom: 12 }}
        />

        <Link href="/sign-in" asChild>
          <Button title="Entrar com e-mail" variant="outline" />
        </Link>
      </View>
    </SafeAreaView>
  );
}
