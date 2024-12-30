import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import { ReactNode } from "react";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: ReactNode;
  variant?: "filled" | "outline";
};

export function Button({
  title,
  icon,
  variant = "filled",
  style,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, styles[variant], style]}
      {...rest}
    >
      {icon && <View>{icon}</View>}
      <Text
        style={[
          styles.title,
          variant === "filled" ? styles.filledText : styles.outlineText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
