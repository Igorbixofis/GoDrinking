import { ScrollView, Image, TextInput} from "react-native"
import logo from '../../assets/images/logo.png'
import filterIcon from '../../assets/images/filterIcon.png'

export const ProductsScreens = () => {
    return(
        <ScrollView>

            <Image source={logo}/>

            <View>
                <TextInput keyboardType="Digite aqui..."/>
                <Image source={filterIcon}/>
            </View>

        </ScrollView>
    )
}