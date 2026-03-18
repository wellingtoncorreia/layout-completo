import { View, Text } from "react-native";
import styles from "../css/homeStyle";


export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>
      <Text style={styles.texto}>Essa é a segunda aba.</Text>
    </View>
  );
}