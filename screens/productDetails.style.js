import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999
    }
})

export default styles