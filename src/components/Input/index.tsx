import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  icon?: React.ReactNode;
  label: string;
};

export function Input({ icon, label, style, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          style={[styles.input, style]}
          placeholder={label}
          placeholderTextColor="#999"
          {...rest}
        />
      </View>
      <View style={styles.border} />
    </View>
  );
}
