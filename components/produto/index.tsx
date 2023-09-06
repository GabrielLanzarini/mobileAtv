import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

export default function Produto({ name, remove }) {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.productText}>{name}</Text>
      <TouchableOpacity onPress={remove} style={styles.removeButton}>
        <Text style={{ color: "white", fontWeight: "bold" }}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
