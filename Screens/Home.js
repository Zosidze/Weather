import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/th.jpg")}
      style={{ flex: 1, display: "flex" }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "tbilisi" })}
        >
          <Text>Tbilisi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "batumi" })}
        >
          <Text>Batumi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "kutaisi" })}
        >
          <Text>Kutaisi</Text>
        </TouchableOpacity>
      </View>
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
    color: "#fff",
    fontSize: 24,
    borderStyle: "dotted",
    borderBottomWidth: 2,
    borderColor: "white",
    padding: 12,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    textTransform: "capitalize",
    fontFamily: "sans-serif",
  },
});
