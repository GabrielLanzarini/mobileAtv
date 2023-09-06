import { Text, TouchableHighlight, View } from "react-native"
import Imc from "./screens/imc"
import { useState } from "react"
import ListaCompras from "./screens/listaCompras"
import MarcadorTruco from "./screens/MarcadorTruco"

export default function App() {
    const [pagina, setPagina] = useState(0)

    if (pagina == 0)
        return (
            <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
                <View style={{ backgroundColor: "black", alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <TouchableHighlight onPress={() => setPagina(1)} style={{ width: "60%", height: 40, justifyContent: "center", borderRadius: 15, backgroundColor: "white", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Lista Mercado</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => setPagina(2)}
                        style={{ marginTop: 15, width: "60%", height: 40, justifyContent: "center", borderRadius: 15, backgroundColor: "white", alignItems: "center" }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Calculadora IMC</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => setPagina(3)}
                        style={{ marginTop: 15, width: "60%", height: 40, justifyContent: "center", borderRadius: 15, backgroundColor: "white", alignItems: "center" }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Marcador Truco</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )

    if (pagina == 1) return <ListaCompras />
    if (pagina == 2) return <Imc />
    if (pagina == 3) return <MarcadorTruco />
}
