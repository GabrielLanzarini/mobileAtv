import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    containerPrincipal: { flex: 1, backgroundColor: "black", padding: 10, alignItems: "center" },
    textoPrincipal: { color: "white", fontSize: 30, marginTop: 40, fontWeight: "bold" },
    buttonZerar: {
        backgroundColor: "#de9609",
        width: "60%",
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        borderRadius: 5,
    },
    containerMarcadores: {
        width: "100%",
        height: "50%",
        marginTop: 100,
        flexDirection: "row",
    },
    containerMarcacao: {
        width: "50%",
        alignItems: "center",
    },
    textNome: {
        fontSize: 25,
        fontWeight: "bold",
    },
    textMarcacao: {
        fontSize: 100,
        fontWeight: "bold",
    },
    buttonMarcar: {
        width: 100,
        alignItems: "center",
        height: 60,
        marginTop: 15,
        justifyContent: "center",
        borderRadius: 5,
    },
    textPlacarPrincipal: {
        color: "white",
        marginTop: 30,
        fontSize: 20,
        fontWeight: "bold",
    },
    textPlacar: { color: "white", marginTop: 10, fontSize: 20, fontWeight: "bold" },
    containerPlacar: { alignItems: "center" },
})
