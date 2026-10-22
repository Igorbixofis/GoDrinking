import { ScrollView, Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import tnt from "../../assets/images/tnt.png "

export const OurHighLights = () => {
    return(
        <View>

            <Text> Nossos <Text>Destaques</Text></Text>

            <ScrollView>
                <CardProduct image={ tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
            </ScrollView>
        </View>
    )
}