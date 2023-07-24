import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    welcomeText: (color,top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge-5,
        marginTop: top,
        color: color
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        marginHorizontal: SIZES.small,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop:SIZES.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginHorizontal: SIZES.small,
        borderRadius: SIZES.small   
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: "100%",
        color: COLORS.primary,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles