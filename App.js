import { Home } from "./Screens/Home";
import { Info } from "./Screens/Info";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Info"} component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
