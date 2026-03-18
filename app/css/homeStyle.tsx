import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imagem: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;