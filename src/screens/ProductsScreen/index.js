import { ScrollView, Image, TextInput, View,Text} from "react-native"
import logo from '../../assets/images/logo.png'
import filterIcon from '../../assets/images/filterIcon.png'
import { style } from "./style"
import {CardProduct} from "../../components/CardProduct"
import tnt from "../../assets/images/tnt.png"


export const ProductsScreens = () => {
    return(
        <ScrollView contentContainerStyle={style.containerProductScreen}>

            <Image style = {style.imgLogo} source={logo}/>

            <View style = {style.containerinput}>
                <TextInput style = {style.input}keyboardType="Digite aqui..."/>
                <Image source={filterIcon}/>
            </View>

            <View style = {style.ourProducts}>
                <View>
                <Text style = {style.textOurProducts}>Nossos</Text>
                <Text style = {style.textHighlightOurProducts}>Produtos</Text>
                </View>
                <View style = {style.containerProducts}>
                    <CardProduct image={tnt} title = "tnt roxo" description="Nosso sabor conta como..." />
                    <CardProduct image ={tnt} title = "tnt roxo" description="Nosso sabor conta como..." />
                    <CardProduct image ={tnt} title = "tnt roxo" description="Nosso sabor conta como..." />
                    <CardProduct image ={tnt} title = "tnt roxo" description="Nosso sabor conta como..." />
                    <CardProduct image ={tnt} title = "tnt roxo" description="Nosso sabor conta como..." />
                    <CardProduct image ={tnt} title = "tnt roxo" description="Nosso sabor conta como..." />
                </View>
            </View>

        </ScrollView>
    )
}