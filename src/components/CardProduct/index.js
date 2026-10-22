import { Image,Pressable,View, Text } from "react-native"

export const CardProduct = ({Image, title , description}) => {
    return(
        <View>
            <Image source = {Image}/>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Pressable>
                <Text> Saiba mais  </Text>
            </Pressable>
 
        </View>
    )
}