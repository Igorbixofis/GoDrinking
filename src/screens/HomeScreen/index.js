import { ScrollView } from "react-native"
import { Image } from "react-native"
import { OurOffers } from "../../components/OurOffers"
import {logo} from "../../assets/images/logo.png"
import { styles } from "./style"
import { AvaliableSizes } from "../../components/AvaliableSizes"
import { OurHighLights } from "../../components/OurHighlights"



export const HomeScreen = () =>{
    return(
        <ScrollView contentContainerStyle={styles.containerHomeScreen} > 
           <Image source={logo} style={styles.logoHome}/>
           
           <OurOffers/>
           
           <AvaliableSizes/>
          
           <OurHighLights/>
           <OurHighLights/>
           <OurHighLights/>
           <OurHighLights/>
          
        </ScrollView>
    )
}