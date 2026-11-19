import { createNativeStackNavigator } from 'react-navigation/native-stack';
import {StartScreen} from "../screens/StartScreen"
import{HomeScreen} from "../screens/HomeScreen"
import { ProductsScreens } from "../screens/ProductsScreen"
import { DetailsProduct } from "../screens/DetailsProduct"


export const AppRouter = ()=> {
    
    const Stack = createNativeStackNavigator()
    
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='start' screenOptions={{headershow: false}}>
                <Stack.Screen name="start" component={StartScreen}/>
                <Stack.Screen name="home" component={HomeScreen}/>
                <Stack.Screen name="products" component={ProductsScreens}/>
                <Stack.Screen name="details" component={DetailsProduct}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}