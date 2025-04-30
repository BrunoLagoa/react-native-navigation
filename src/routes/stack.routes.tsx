import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../screens/Profile'

const Stack = createStackNavigator()

export default function DrawerRoutes() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home"
        component={Profile}
      />
    </Stack.Navigator>
  )
}