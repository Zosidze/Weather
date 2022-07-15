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
          title="Tbilisi"
        >
          Tbilisi
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "batumi" })}
          title="Batumi"
        >
          Batumi
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Info", { city: "kutaisi" })}
          title="Kutaisi"
        >
          kutaisi
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
