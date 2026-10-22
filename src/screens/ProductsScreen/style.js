import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const style = StyleSheet.create({
    containerProductScreen:{
        flex:1,
        backgroundColor: colors.colorDarkPurple,
        gap:40,
        paddingLeft: 20,
    },
    imgLogo:{
        width:140,
        height:55,
    },
    input:{
        width:330,
        height:40,
        backgroundColor:"#DE1EEC",
        borderRadius:5,
        borderWidth:1,
        borderColor: "#DE1EEC"
    }
})