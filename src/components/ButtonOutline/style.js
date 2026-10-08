import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    btnOutline:{
        borderWidth:2,
        borderColor: colors.colorRoyalBlue,
        borderRadius:7,
        paddingVertical: 10,
        width:250
    },
    txtBtnOutline:{
        color: colors.colorRoyalBlue,
        fontSize: 18,
        textAlign: "center"
    }
})