import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Day } from "../components/Day";

const width = Dimensions.get("screen").width;

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
  return (
    <ImageBackground
      source={require("../assets/unnamed.png")}
      style={{ flex: 1, display: "flex" }}
    >
      <SafeAreaView style={styles.container}>
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.current}>{weather.current.temp}°C</Text>
        <FlatList
          data={weather.daily}
          renderItem={({ item }) => <Day day={item} />}
        ></FlatList>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: width,
    flex: 1,
    display: "flex",
    alignItems: "center",
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
