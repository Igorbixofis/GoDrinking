import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";


export const styles = StyleSheet.create({
    btnPrimary:{
        backgroundColor: colors.colorHotDrink,
        paddingVertical: 10,
        width: 350,
        borderRadius:7
    },
    txtBtnPrimary:{
        textAlign: "center",
        fontSize:18,
        color: colors.colorWhite
    }
})