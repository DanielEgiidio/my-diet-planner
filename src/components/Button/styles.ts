import { StyleSheet } from "react-native";
import { colors } from "@/src/app/styles/colors";
import { fontFamily } from "@/src/app/styles/font-family";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
    width: "100%",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },

  filled: {
    backgroundColor: colors.green.base,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.green.base,
  },

  filledText: {
    color: colors.gray[100],
  },
  outlineText: {
    color: colors.green.base,
  },
});
