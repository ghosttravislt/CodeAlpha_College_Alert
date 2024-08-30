import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Home from "./Navigators/Home";
import About from "./Navigators/About";
import History from "./Navigators/History";
import Lectures from "./components/lectures";
import Seminar from "./components/seminar";
import Workshop from "./components/workshop";
import Others from "./components/others";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="College App"
        // title="college App"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home" size={20} color={"red"}></Ionicons>;
          },
          headerBackground: () => {
            <View style={{ flex: 1, backgroundColor: "lightblue" }} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          title: "About  Page",
          tabBarIcon: () => {
            return <Ionicons name="person" size={20} color={"red"}></Ionicons>;
          },
        }}
      />
      <Tab.Screen
        name="Histroy"
        component={History}
        options={{
          title: "History Page",
          tabBarIcon: () => {
            return <Ionicons name="list" size={20} color={"red"}></Ionicons>;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Stack navigator that includes the tab navigator as one of the screens */}
        <Stack.Screen
          name="college App"
          component={ScreenTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="lecture" component={Lectures} />
        <Stack.Screen name="Seminars" component={Seminar} />
        <Stack.Screen name="Workshop" component={Workshop} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
