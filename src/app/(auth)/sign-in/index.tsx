import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import { Email, Senha } from "../../assets/icons/Icons";
import { styles } from "./styles";

export default function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Entrar</Text>

        <Input
          label="Seu e-mail"
          icon={<Email />}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input label="Senha" icon={<Senha />} secureTextEntry />

        <Link href="/home" asChild>
          <Button title="Entrar com e-mail" style={styles.signInButton} />
        </Link>

        <Link href="/sign-up" asChild>
          <Button
            title="Cadastre-se"
            variant="outline"
            style={styles.registerButton}
          />
        </Link>
      </View>
    </SafeAreaView>
  );
}
