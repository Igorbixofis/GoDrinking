import {  View } from 'react-native';
import { StartScreen } from './screens/StartScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProductsScreens } from './screens/ProductsScreen';


export default function App() {
  return (
    <View style={{flex: 1}}>
    {/*<HomeScreen/>*/}
    <ProductsScreens/>
    </View>
  )
};

