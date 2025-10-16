import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LessonScreen from './src/screens/LessonScreen';
import QuizScreen from './src/screens/QuizScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { colors } from './src/theme';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.bg, text: colors.text, card: colors.surface, border: colors.border },
};

function TabNav() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border, height: 60 },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#94a3b8',
        tabBarIcon: ({ color, size }) => {
          const map = { Home: 'home', Perfil: 'person' };
          return <Ionicons name={map[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Perfil" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold });
  if (!loaded) return <View style={{ flex:1, backgroundColor: colors.bg }} />;

  // Tipografía Inter por defecto (simple patch)
  const Text = require('react-native').Text;
  const oldRender = Text.render;
  Text.render = function (...args) {
    const origin = oldRender.call(this, ...args);
    if (!origin) return origin;
    const props = origin.props;
    return { ...origin, props: { ...props, style: [{ fontFamily:'Inter_400Regular', color: colors.text }, props.style] } };
  };

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: colors.bg } }}>
        <Stack.Screen name="Root" component={TabNav} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson" component={LessonScreen} options={{ title: 'Lección' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Práctica' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
