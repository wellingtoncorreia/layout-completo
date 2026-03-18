import { View, Text, Image } from "react-native";
import styles from "../css/homeStyle";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Tela Inicial</Text>
      <Text style={styles.texto}>
        Aqui estamos juntando Image, View, Text e Tabs.
      </Text>
    </View>
  );
}