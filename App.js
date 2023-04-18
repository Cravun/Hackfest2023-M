import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// import { createButtonNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
// import { Request } from "./Request";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AccountSetting from "./pages/AccountSetting";
import NavigationScreen from "./pages/NavigationScreen";
import DonatorMap from "./pages/donation/DonatorMap";
import BloodDonationStart from "./pages/donation/BloodDonationStart";
import DonorForm from "./pages/donation/DonorForm";
import RequestKnowledge from "./pages/RequestKnowledge";
import DonationKnowledge from "./pages/DonationKnowledge";
import BloodRequestStart from "./pages/BloodRequestStart";
import WhyDonate from "./pages/WhyDonate";

//import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
// import Onboarding1 from "./pages/Onboarding1";
import Dashboard from "./pages/Dashboard";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AccountSetting"
          component={AccountSetting}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DonatorMap"
          component={DonatorMap}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BloodDonationStart"
          component={BloodDonationStart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DonorForm"
          component={DonorForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DonationKnowledge"
          component={DonationKnowledge}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RequestKnowledge"
          component={RequestKnowledge}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BloodRequestStart"
          component={BloodRequestStart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WhyDonate"
          component={WhyDonate}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
