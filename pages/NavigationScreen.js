import React from "react";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Dashboard from "./Dashboard";
import Donate from "./Donate";
import Request from "./Request";
import Learn from "./Learn";

const Tab = createBottomTabNavigator();

const DashboardScreen = "Dashboard";
const DonateScreen = "Donate";
const RequestScreen = "Request";
const LearnScreen = "Learn";

const NavigationScreen = () => {
  const route = useRoute();
  // const userID = route.params.userID

  return (
    <Tab.Navigator
      initialRouteName={Dashboard}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === DashboardScreen) {
            iconName = focused ? "home" : "home";
          } else if (rn === DonateScreen) {
            iconName = focused ? "heart-half-outline" : "heart-half-outline";
          } else if (rn === RequestScreen) {
            iconName = focused ? "hand-right-outline" : "hand-right-outline";
          } else if (rn === LearnScreen) {
            iconName = focused ? "book-outline" : "book-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF3535",
        inactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Donate"
        component={Donate}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Request"
        component={Request}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Learn"
        component={Learn}
      />
    </Tab.Navigator>
  );
};

export default NavigationScreen;
