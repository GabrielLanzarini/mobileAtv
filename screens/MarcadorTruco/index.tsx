import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useState, useEffect } from "react"
import Tts from "react-native-tts"

export default function MarcadorTruco() {
    const trucoHelper = [
        [1, "Trucar"],
        [3, "Seis"],
        [6, "Nove"],
        [9, "Doze"],
        [12, "Desistir"],
    ]

    const [pontosNos, setPontosNos] = useState(11)
    const [pontosEles, setPontosEles] = useState(11)
    const [truco, setTruco] = useState(trucoHelper[0])
    const [placar, setPlacar] = useState([0, 0])

    const handleTruco = () => {
        const index = trucoHelper.findIndex((e) => e[0] == truco[0])
        if (index == 4) return setTruco(trucoHelper[0])
        setTruco(trucoHelper[index + 1])
    }

    const handlePontosMais = (pontos: number, setPontos: Function) => {
        setTruco(trucoHelper[0])
        setPontos(pontos + +truco[0])
        if (pontos + +truco[0] > 11) {
            setPlacar((prev) => [prev[0] + 1, prev[1]])
            handleZerar(false)
        }
        if (pontos + +truco[0] > 11) {
            setPlacar((prev) => [prev[0], prev[1] + 1])
            handleZerar(false)
        }
    }

    const handlePontosMenos = (pontos: number, setPontos: Function) => {
        setTruco(trucoHelper[0])
        if (pontos == 0) return
        setPontos(pontos - 1)
    }

    const handleZerar = (placar: boolean) => {
        setPontosEles(0)
        setPontosNos(0)
        if (placar) setPlacar([0, 0])
        setTruco(trucoHelper[0])
    }

    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.textoPrincipal}>MARCADOR DE TRUCO</Text>
            <View style={styles.containerPlacar}>
                <Text style={styles.textPlacarPrincipal}>Placar Geral</Text>
                <Text style={styles.textPlacar}>
                    {placar[0]} X {placar[1]}
                </Text>
            </View>
            <View style={styles.containerMarcadores}>
                <View style={styles.containerMarcacao}>
                    <Text style={[styles.textNome, { color: "#4aa5f9" }]}>Nós</Text>
                    <Text style={[styles.textMarcacao, { color: "#4aa5f9" }]}>{pontosNos}</Text>
                    <View style={{ marginTop: 50 }}>
                        <TouchableOpacity onPress={() => handlePontosMais(pontosNos, setPontosNos)} style={[styles.buttonMarcar, { backgroundColor: "#589d52" }]}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>+ {truco[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePontosMenos(pontosNos, setPontosNos)} style={[styles.buttonMarcar, { backgroundColor: "#bd1010" }]}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>- 1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerMarcacao}>
                    <Text style={[styles.textNome, { color: "#c08df3" }]}>Eles</Text>
                    <Text style={[styles.textMarcacao, { color: "#c08df3" }]}>{pontosEles}</Text>
                    <View style={{ marginTop: 50 }}>
                        <TouchableOpacity onPress={() => handlePontosMais(pontosEles, setPontosEles)} style={[styles.buttonMarcar, { backgroundColor: "#589d52" }]}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>+ {truco[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePontosMenos(pontosEles, setPontosEles)} style={[styles.buttonMarcar, { backgroundColor: "#bd1010" }]}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>- 1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={handleTruco} style={[styles.buttonZerar, { marginBottom: 30 }]}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{truco[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleZerar(true)} style={styles.buttonZerar}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Zerar</Text>
            </TouchableOpacity>
        </View>
    )
}
