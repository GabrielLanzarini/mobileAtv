import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useState } from "react"
import Produto from "../../components/produto"

export default function ListaCompras() {
    const [value, setValue] = useState<string>("")
    const [produtos, setprodutos] = useState<string[]>([])

    const handleClick = () => {
        if (value.trim().length > 0) {
            if (produtos.includes(value)) {
                setValue("")
                return Alert.alert("Problema", "Produto já adicionado")
            }
            setprodutos([...produtos, value])
            setValue("")
        } else {
            Alert.alert("Problema", "Produto Inválido")
        }
    }

    const handleRemove = (index: number) => {
        Alert.alert("Remover", `Remover a ${produtos[index]}`, [
            {
                text: "Cancelar",
                style: "cancel",
            },
            {
                text: "Remover",
                onPress: () => {
                    setprodutos((prevParticipantes) => {
                        const updatedParticipantes = [...prevParticipantes]
                        updatedParticipantes.splice(index, 1)
                        return updatedParticipantes
                    })
                },
            },
        ])
    }

    return (
        <View style={styles.containerPrincipal}>
            <View>
                <Text style={styles.principalText}>Lista de Compras</Text>
                <Text style={styles.subTextGrey}>Sexta, 14 de novembro de 2023</Text>
            </View>
            <View style={styles.containerButtonInput}>
                <TextInput value={value} onChangeText={setValue} placeholderTextColor="#7e7d8c" placeholder="Nome do Produto" style={styles.input}></TextInput>
                <TouchableOpacity onPress={handleClick} style={styles.buttonAdd}>
                    <Text style={styles.subTextWhite}>Adicionar Produto</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.textProduto}>Produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => <Produto remove={() => handleRemove(index)} name={item} />}
                ListEmptyComponent={() => <Text style={styles.subTextWhiteNormal}>Não existem produtos na sua lista de compras!</Text>}
            />
        </View>
    )
}
