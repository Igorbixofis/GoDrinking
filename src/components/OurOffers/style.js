import { colors } from "../../themes/colors";
import { StyleSheet } from "react-native";
import { fonts } from "../../themes/fonts";


export const styles = StyleSheet.create({
    containerOurOffers:{
        gap:10
    },
    textOurOffers:{
    color: colors.colorWhite,
    fontSize: 25,
    fontFamily: fonts.fontTilte,
    fontWeight:"700",
    },
    textHighLight:{
        color:colors.colorHotDrink
    },
    scrollContent:{
        gap:15,
    }
})