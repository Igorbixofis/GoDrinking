import { Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import tnt from "../../assets/images/tnt.png"
import { Styles } from "./style"

export const OurHighLights = () => {
    return(
        <View Style = {Styles.container}>

            <Text style={Styles.textOurHighLights}> Nossos <Text style = {Styles.textHighLights}>Destaques</Text></Text>

            <View style={Styles.containerProducts}>
                
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                <CardProduct image={tnt} title = "TNT Roxo" description="Nosso sabor conta como..." />
                               



            </View>
        </View>
    )
}