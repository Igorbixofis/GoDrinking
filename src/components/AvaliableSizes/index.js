import { ScrollView, View, Text} from "react-native"
import { CardSize } from "../CardSize"
import tnt from "../../assets/images/tnt.png"
import { styles } from "./style"

export const AvaliableSizes = ( )=> {
   return( 
     <View style = {styles.containerAvaliableSizes}>
    
        <Text style={styles.textTitle}>Tamanhos <Text style={styles.textHighlight}>Disponíveis </Text></Text>
        <ScrollView horizontal contentContainerStyle={ScrollView}>
            <CardSize image ={tnt} amount="269" measure="ml"/>
            <CardSize image ={tnt} amount="350" measure="ml"/>
            <CardSize image ={tnt} amount="429" measure="ml"/>
            <CardSize image ={tnt} amount="609" measure="ml"/>
            <CardSize image ={tnt} amount="1,5" measure="L"/>

        </ScrollView>
        


    </View>
   )
}