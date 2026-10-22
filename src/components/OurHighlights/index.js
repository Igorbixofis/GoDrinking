import { ScrollView, Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import tnt from "../../assets/images/tnt.png"
import { Styles } from "./style"

export const OurHighLights = () => {
    return(
        <View Style = {Styles.container}>

            <Text Styles = { Styles.textOurHighLights}> Nossos <Text Styles = {Styles.textHighLights}>Destaques</Text></Text>

            <View>
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
            </View>
        </View>
    )
}