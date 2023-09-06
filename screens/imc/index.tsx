import { Keyboard, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "./style"
import { useEffect, useState } from "react"
import { SvgXml } from "react-native-svg"

export default function Imc({ backPage }) {
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [result, setResult] = useState("")

    const calculaIMC = () => {
        const alturaConvert = parseFloat(altura.replace(",", "."))
        const imc = +peso / (alturaConvert * alturaConvert)
        if (imc < 18.5) return setResult("Baixo Peso")
        if (imc >= 18.5 && imc < 24.9) return setResult("Peso normal")
        if (imc >= 25 && imc < 29.9) return setResult("Sobrepeso")
        if (imc >= 30 && imc < 34.9) return setResult("Obesidade grau 1")
        if (imc >= 35 && imc < 39.9) return setResult("Obesidade grau 2")
        if (imc > 40) return setResult("Obesidade grau 3")
    }

    return (
        <View onTouchStart={Keyboard.dismiss} style={styles.containerPrincipal}>
            <View style={styles.containerTextoPrincipal}>
                <Text style={styles.textoPrincipalBranco}>Calculadora de IMC</Text>
                <Text style={styles.textoSubBranco}>Descubra qual o seu índice de massa corporal</Text>
            </View>
            <View style={styles.buttonInputsContainer}>
                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textoSubBranco}>Peso(kg)</Text>
                        <TextInput value={peso} onChangeText={setPeso} keyboardType="decimal-pad" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textoSubBranco}>Altura(m)</Text>
                        <TextInput value={altura} onChangeText={setAltura} keyboardType="decimal-pad" style={styles.input} />
                    </View>
                </View>
                <TouchableHighlight onPress={calculaIMC} style={styles.button}>
                    <Text style={{ color: "#967adc", fontSize: 0, fontWeight: "bold" }}>CALCULAR</Text>
                </TouchableHighlight>
                <View style={styles.containerResultado}>
                    {result != "" && (
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "#967adc", marginTop: 15, fontSize: 15 }}>Seu indice de massa corporal é:</Text>
                            <Text style={{ color: "#967adc", marginTop: 20, fontSize: 20, fontWeight: "bold" }}>{result}</Text>
                        </View>
                    )}
                </View>
                <Text style={{ color: "white", marginTop: 15, fontSize: 20, fontWeight: "bold" }}>CESUL</Text>
            </View>
        </View>
    )
}
