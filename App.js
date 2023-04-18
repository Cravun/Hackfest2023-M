import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


// import { createButtonNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
// import { Request } from "./Request";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NavigationScreen from "./pages/NavigationScreen";

//import Donate from "./pages/Donate";
//import Profile from "./pages/Profile";
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
            headerShown : false
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ 
            headerShown : false
          }}
        /> */}
        <Stack.Screen 
          name="NavigationScreen" 
          component={NavigationScreen} 
          options={{ 
            headerShown : false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
