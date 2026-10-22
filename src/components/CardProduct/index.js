import { Image,Pressable,View, Text } from "react-native"
import { style } from "./style"

export const CardProduct = ({image, title , description}) => {
    return(
        <View style = {style.cardContainer}>
            <Image source = {image} style = {style.imgProduct}/>
            <Text style={style.titleProduct}>{title}</Text>
            <Text style={style.descriptionProduct}>{description}</Text>
            <Pressable>
                <Text> Saiba mais  </Text>
            </Pressable>
 
        </View>
    )
}