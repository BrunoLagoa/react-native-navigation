import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      id={undefined}
      screenOptions={{
        title: '',
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerInactiveTintColor: '#727d9b',
        drawerActiveTintColor: '#ffffff',
        drawerHideStatusBarOnOpen: true,
        overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: '#1D1F25',
          width: '50%',
          paddingTop: 32,
        },
        sceneStyle: { backgroundColor: '#1D1F25' },
      }}
    >
      <Drawer.Screen
        name='home'
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          ),
          drawerLabel: 'Início',
        }}
      />
      <Drawer.Screen
        name='profile'
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name='user' color={color} size={size} />
          ),
          drawerLabel: 'Meu Perfil',
        }}
      />
    </Drawer.Navigator>
  );
}
