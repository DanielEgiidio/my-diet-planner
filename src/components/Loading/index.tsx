import { ActivityIndicator, View } from "react-native";

import { s } from "./styles";
import { colors } from "@/src/app/styles/colors";

export function Loading() {
  return (
    <View style={s.container}>
      <ActivityIndicator color={colors.gray.base} />
    </View>
  );
}
