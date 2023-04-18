import React from 'react'
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Dashboard from './Dashboard';
import Donate from './Donate'
import Request from './Request'
import Learn from './Learn';

const Tab = createBottomTabNavigator();

// const Dashboard = "Dashboard";
// const Donate = "Donate";
// const Request = "Request";
// const Learn = "Learn";

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
                if (rn === Dashboard) {
                iconName = focused ? 'planet-outline' : 'planet-outline';

                } else if (rn === Donate) {
                iconName = focused ? 'heart-half-outline' : 'heart-half-outline';

                } else if (rn === Request) {
                iconName = focused ? 'hand-right-outline' : 'hand-right-outline';
                }
                else if (rn === Learn) {
                iconName = focused ? 'person-outline' : 'person-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
                tabBarActiveTintColor:'#FF3535',
                inactiveTintColor: 'grey',
            })}>
            <Tab.Screen options={{ headerShown: false}} name="Dashboard" component={Dashboard}/>
            <Tab.Screen options={{ headerShown: false}} name="Donate" component={Donate}/>
            <Tab.Screen options={{ headerShown: false}} name="Request" component={Request}/>
            <Tab.Screen options={{ headerShown: false}} name="Learn" component={Learn}/>
        </Tab.Navigator>
    )
}

export default NavigationScreen