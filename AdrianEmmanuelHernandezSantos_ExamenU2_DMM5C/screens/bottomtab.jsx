import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import {  color } from "@rneui/base";
import {MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Posts from "./posts";
import Search from "./search";
import PerfilNav from "./perfil";




const Tab = createBottomTabNavigator();

const BottomNav =() => {
    return(
            <Tab.Navigator initialRouteName="Posts">  
            
            <Tab.Screen name="Posts" component={Posts}  options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                      ),
                }}
            />
             <Tab.Screen name="Search" component={Search} options={{ 
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#089779',
                tabBarActiveTintColor: '#002e60',
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons name="search" color={color} size={25} />
                )
            }}></Tab.Screen>

            <Tab.Screen name="Profile" component={PerfilNav} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#089779',
                tabBarActiveTintColor: '#002e60',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="account-circle-outline" color={color} size={25} /> //Iconos 
                )
            }}></Tab.Screen>
             
            </Tab.Navigator>
    )
}

export default BottomNav;