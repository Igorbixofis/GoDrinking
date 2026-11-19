import { Image, Pressable, Text, View  } from "react-native"
import { ButtonPrimary }   from "../../components/ButtonPrimary"
import { ButtonOutline } from "../../components/ButtonOutline"
import logo from "../../assets/images/logo.png"
import {styles} from "./style"
import{useFonts}from 'expo-font'
import{useNavigation} from "react-navigation/native"


export const StartScreen = () => {
    
    useFonts({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    })

    

    const navigation = useNavigation()
    
    return(
    <View style = {styles.containerStartScreen}>
        <Image source={logo} />

        <Text style = {styles.textWelcome}>Seu app para comprar energéticos de forma rápida, prática e segura. Encontre suas marcas favoritas e receba onde estiver.</Text>

        <Pressable onPress={()=>navigation.navigate("home")}>
            <Text style={styles.teste}>CLIQUE AQUI</Text>
        </Pressable>

        <ButtonPrimary title = "Entrar" onPress={()=> navigation.navigate("home")}/>
        <ButtonOutline title= "Cadastrar" style = {styles.ButtonOutline}/>
    </View>
    )
}