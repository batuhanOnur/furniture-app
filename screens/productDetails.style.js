import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999
    },
    image: {
        width: '100%',
        height: '40%',
        //aspectRatio: 1,
        resizeMode:'cover',
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 44,
        top: 20
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    priceWrapper:{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        paddingHorizontal: 6,
        fontFamily: "semibold",
        fontSize: SIZES.large
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 5
    },
    rating:{
        top: SIZES.large,
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large
    },
    ratingText: {
        fontFamily: "medium",
        color: COLORS.gray,
        marginHorizontal: SIZES.small
    },
    descriptionWrapper: {
        marginTop: SIZES.large + 2,
        marginHorizontal: SIZES.large
    }
})

export default styles