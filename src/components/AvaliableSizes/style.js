import { ScrollView, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({  
   containerAvaliableSizes:{
   gap:10},
   textTitle:{
    fontSize:25,
    fontWeight:"bold",
    fontFamily:fonts,
    color: colors.colorWhite
   },
   textHighlight:{
    color: colors.colorHotDrink
   },
   ScrollView:{
    gap:10
   }
})