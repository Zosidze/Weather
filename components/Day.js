import { View, Text, StyleSheet, Image } from "react-native";

const icons = {
  cloudy: require("../assets/cloudy-day.png"),
  sunny: require("../assets/sunny.png"),
  rainy: require("../assets/rain.png"),
};

const generateIcon = (temp) => {
  if (temp > 24) {
    return icons.sunny;
  } else if (temp < 24 && temp > 20) {
    return icons.cloudy;
  }
  return icons.rainy;
};

export const Day = ({ day }) => {
  console.log(day);
  return (
    <View style={styles.container}>
      <Text style={styles.weekDay}>
        {new Date(day.dt * 1000).toLocaleString("en-us", {
          weekday: "long",
        })}
      </Text>
      <View style={styles.info}>
        <Image
          style={styles.icons}
          source={generateIcon(((day.temp.min + day.temp.max) / 2).toFixed())}
        ></Image>
        <Text style={styles.temp}>
          {((day.temp.min + day.temp.max) / 2).toFixed()}°C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "100vw",
    padding: 16,
    backgroundColor: "#ffffff80",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
  },
  icons: {
    width: 30,
    height: 30,
  },
  temp: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  weekDay: {
    fontSize: 24,
    fontWeight: "600",
  },
});
