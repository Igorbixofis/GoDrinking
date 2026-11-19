import { View , Image, Text, Button} from "react-native"
import tnt from "../../assets/images/tnt.png"
import OptionImage from "../../assets/images/OptionImage.png"
import { styles } from "./style"
import { ButtonPrimary } from "../../components/ButtonPrimary"


export const DetailsProduct = () => {
    return(
        <View style={styles.containerDetailsProducts}>
            <View style={styles.featuredproducts}>
                <Image source={tnt}/>
                <View>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>

                </View>
            </View>

            <View style={styles.detailsProducts}>
                <Text style={styles.volumeProduct}>269ml</Text>
                 <View>
                     <View>
                       <Text style={styles.textTitle}>Tnt energy</Text>
                       <Text style ={styles.textHighlight}>Açai com guaraná</Text>
                     </View>

                    <Text style={styles.textDescription}>Combina o sabor marcante do açaí com o toque do guaraná em uma bebida energética refrescante. Ideal para quem bus...</Text>
                 </View>

                 <ButtonPrimary title="Comprar"/>

            </View>



        </View>
    )
}