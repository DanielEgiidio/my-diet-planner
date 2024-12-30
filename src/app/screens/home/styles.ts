import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 54,
    paddingBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  menuIcon: {
    justifyContent: "space-between",
    alignContent: "center",
    padding: 6,
  },
  menuLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#000",
    borderRadius: 1,
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 18,
    backgroundColor: "#F4F4F4",
  },
  dayContainer: {
    alignItems: "center",
    padding: 16,
    justifyContent: "center",
    borderRadius: 18,
  },
  activeDayContainer: {
    backgroundColor: colors.green.light,
  },
  dayText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  activeDayText: {
    color: "#FFF",
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  secondProfileImage: {
    marginTop: -20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyText: {
    fontSize: 24,
    maxWidth: 300,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.green.light,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#006B54",
    fontSize: 14,
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
  },
  navItem: {
    alignItems: "center",
    color: "#757575",
  },
});
