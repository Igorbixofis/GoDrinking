import { View } from "react-native"
import { Image } from "react-native"
import { OurOffers } from "../../components/OurOffers"
import {logo} from "../../assets/images/logo.png"
export const HomeScreen = () =>{
    return(
        <View> 
           <Image source={logo}/>
           <OurOffers/>
        </View>
    )
}