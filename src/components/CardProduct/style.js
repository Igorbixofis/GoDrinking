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
        backgroundColor: "#270053",
        width:180,
        alignItems:"center"

    },
    imgProduct:{
        width:50,
        height:110
    },
    titleProduct:{
        fontSize:24,
        fontWeight:"400",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite,
        alignSelf:"flex-start"
    },
    descriptionProduct:{
        fontSize:15,
        fontWeight:"400",
        fontFamily: fonts.fontBody,
        color: colors.colorGrey
    },
    btnLearnMore:{
        backgroundColor: colors.colorHotDrink,
        width:155,
        paddingVertical:5,
        paddingHorizontal:5
    },
    textBtn:{
        fontSize:15,
        color: colors.colorWhite,
        fontFamily: fonts.fontBody,
        textAlign:"center"
    }

})