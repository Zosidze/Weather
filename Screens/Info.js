import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ImageBackground,
} from "react-native";
import { Day } from "../components/Day";

const coordinates = {
  tbilisi: {
    lat: 41.716667,
    lon: 44.783333,
  },
  batumi: {
    lat: 41.643414,
    lon: 41.6399,
  },
  kutaisi: {
    lat: 42.266243,
    lon: 42.718002,
  },
};

export const Info = ({ route, navigation }) => {
  const { city } = route.params;
  const { lat, lon } = coordinates[city];
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=43f4699ac1cb3b01c7573d15bcb52f9b&units=metric`;
  const [weather, setWeather] = React.useState();

  const getWeather = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setWeather(json);
  };

  React.useEffect(() => {
    getWeather();
  }, []);

  if (!weather) {
    return <Text>Loading...</Text>;
  }
  console.log(weather);
  return (
    <ImageBackground
      source={require("../assets/unnamed.png")}
      style={{ flex: 1, display: "flex" }}
    >
      <View style={styles.container}>
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.current}>{weather.current.temp}°C</Text>
        <FlatList
          data={weather.daily}
          renderItem={({ item }) => <Day day={item} />}
        ></FlatList>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    paddingTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 12,
  },
  icons: {
    width: 30,
    height: 30,
  },
  current: {
    fontSize: 36,
    fontWeight: "500",
  },
  city: {
    fontSize: 48,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
