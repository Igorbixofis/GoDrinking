import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const style = StyleSheet.create({
    cardContainer: {
        paddingVertical: 20,
        paddingHorizontal:15,
        borderWidth: 2,
        borderColor: colors.colorDeepMagenta,
        borderRadius:13,
        backgroundColor: "#270053"

    },
    imgProduct:{
        width:50,
        height:110
    },
    titleProduct:{
        fontSize:24,
        fontWeight:"400",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite
    },
    descriptionProduct:{
        fontSize:15,
        fontWeight:"400",
        fontFamily: fonts.fontBody,
        color: colors.colorGrey
    }
    
})