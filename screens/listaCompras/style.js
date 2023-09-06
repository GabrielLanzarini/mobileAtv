import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  principalText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  subTextGrey: {
    color: "grey",
    fontSize: 20,
  },
  containerPrincipal: {
    paddingTop: 50,
    padding: 20,
    backgroundColor: "black",
    display: "flex",
    flex: 1,
  },
  input: {
    borderRadius: 5,
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "100%",
    backgroundColor: "#2f374e",
    color: "white",
  },
  subTextWhite: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonAdd: {
    display: " flex",
    alignItems: "center",
    backgroundColor: "#51d766",
    borderRadius: 5,
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  containerButtonInput: {
    gap: 15,
    marginTop: 10,
  },
  textProduto: {
    color: "white",
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
  subTextWhiteNormal: {
    marginTop: 20,
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
})
