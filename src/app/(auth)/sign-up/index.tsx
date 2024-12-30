import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import { Email, Senha, User } from "../../assets/icons/Icons";
import { styles } from "./styles";
import { Link } from "expo-router";

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastre-se</Text>

          <Input label="Seu nome" icon={<User />} autoCapitalize="words" />

          <Input
            label="Seu e-mail"
            icon={<Email />}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input label="Senha" icon={<Senha />} secureTextEntry />
        </View>
        <Link href="/sign-in" asChild>
          <Button title="Continuar" style={styles.continueButton} />
        </Link>
      </View>
    </SafeAreaView>
  );
}
