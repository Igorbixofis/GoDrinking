import { ScrollView, Image, TextInput, View} from "react-native"
import logo from '../../assets/images/logo.png'
import filterIcon from '../../assets/images/filterIcon.png'
import { style } from "./style"

export const ProductsScreens = () => {
    return(
        <ScrollView contentContainerStyle={style.containerProductScreen}>

            <Image source={logo}/>

            <View>
                <TextInput keyboardType="Digite aqui..."/>
                <Image source={filterIcon}/>
            </View>

        </ScrollView>
    )
}