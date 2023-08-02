import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart,NewRivals,ProductDetails } from './screens'
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator()

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    "regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "light": require("./assets/fonts/Poppins-Light.ttf"),
    "bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "extrabold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "semibold": require("./assets/fonts/Poppins-SemiBold.ttf")
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex:1}} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="BottomNavigation"
            component={BottomTabNavigation}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name="Cart"
            component={Cart}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name="ProductDetails"
            component={ProductDetails}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name="ProductList"
            component={NewRivals}
            options={{
              headerShown:false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
