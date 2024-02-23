
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import Posts from "./screens/posts";
import BottomNav from "./screens/bottomtab";


const Stack = createStackNavigator();

export default App = () =>{

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTav" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTav"
          component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name="Posts"
          component={Posts} options={{ headerShown: false }} />   
      </Stack.Navigator>
    </NavigationContainer>
  )
}

