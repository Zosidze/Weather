import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/th.jpg")}
      style={{ flex: 1, display: "flex" }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "tbilisi" })}
        >
          <Text style={styles.buttonText}>Tbilisi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "batumi" })}
        >
          <Text style={styles.buttonText}>Batumi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "kutaisi" })}
        >
          <Text style={styles.buttonText}>Kutaisi</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "start",
    alignItems: "center",
    flex: 1,
    gap: 16,
  },
  button: {
    borderStyle: "dotted",
    borderBottomWidth: 2,
    borderColor: "white",
    padding: 12,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    textTransform: "capitalize",
    color: "#fff",
    fontWeight: "700",
  },
});
