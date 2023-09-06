import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: "#967adc",
    },
    containerTextoPrincipal: {
        marginTop: 60,
        display: "flex",
        width: "100%",
        alignItems: "center",
    },
    textoPrincipalBranco: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    },
    textoSubBranco: {
        color: "white",
        fontSize: 15,
    },
    input: {
        marginTop: 10,
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: "white",
        textAlign: "center",
        color: "#967adc",
        fontWeight: "500",
        fontSize: 20,
    },
    inputContainer: {
        marginTop: 20,
        width: 150,
    },
    inputsContainer: {
        display: "flex",
        flexDirection: "row",
        width: 350,
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        backgroundColor: "white",
        width: 350,
        height: 50,
        marginTop: 40,
    },
    buttonInputsContainer: {
        alignItems: "center",
    },
    containerResultado: {
        height: "60%",
        width: "100%",
        backgroundColor: "white",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
})
