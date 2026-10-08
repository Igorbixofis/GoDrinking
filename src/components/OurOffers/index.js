import { View,Text } from "react-native"
import { Image } from "react-native"
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"

export const OurOffers = () => {
    return(
        <View>

            <Text> Nossas  <Text>Ofertas</Text></Text>
             <ScrollView>
                <Image source={card1}/>
                <Image source={card2}/>
                <Image source={card3}/>

     
           </ScrollView>
        </View>
    )    
}