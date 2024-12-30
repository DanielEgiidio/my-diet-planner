import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 60,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 32,
    paddingBottom: 20,
    textAlign: "center",
  },
  signInButton: {
    marginTop: 24,
    marginBottom: 12,
  },
  registerButton: {
    backgroundColor: "transparent",
    borderColor: "#006B54",
  },
});
