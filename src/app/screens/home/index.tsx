import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Goal, Gym, Hamburguer, Plate, User } from "../../assets/icons/Icons";

const weekDays = [
  { short: "SEG", day: "10" },
  { short: "TER", day: "11", active: true },
  { short: "QUA", day: "12" },
  { short: "QUI", day: "13" },
  { short: "SEX", day: "14" },
  { short: "SAB", day: "15" },
  { short: "DOM", day: "16" },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem vindo, Adrian</Text>
        <TouchableOpacity>
          <View style={styles.menuIcon}>
            <Hamburguer />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.calendar}>
        {weekDays.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              item.active && styles.activeDayContainer,
            ]}
          >
            <Text style={[styles.dayText, item.active && styles.activeDayText]}>
              {item.short}
            </Text>
            <Text
              style={[styles.dateText, item.active && styles.activeDayText]}
            >
              {item.day}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.content}>
        <Text style={styles.emptyText}>
          Você ainda não possui dieta cadastrada!
        </Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Refeição</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Plate />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Goal />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Gym />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
