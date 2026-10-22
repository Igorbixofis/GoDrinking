import { Image,Pressable,View, Text } from "react-native"
import { style } from "./style"

export const CardProduct = ({image, title , description}) => {
    return(
        <View style = {style.cardContainer}>
            <Image source = {image} style = {style.imgProduct}/>

            <View>
            <Text style={style.titleProduct}>{title}</Text>
            <Text style={style.descriptionProduct}>{description}</Text>
            </View>
            <Pressable style = {style.btnLearnMore}>
                <Text style = {style.textBtn}> Saiba mais  </Text>
            </Pressable>
 
        </View>
    )
}