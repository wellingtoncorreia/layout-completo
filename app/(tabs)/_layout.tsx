import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#3b82f6', // Cor da aba selecionada (Azul)
        tabBarInactiveTintColor: '#9ca3af', // Cor da aba inativa (Cinza)
        }}>
      <Tabs.Screen
        name="index"
        options={{ 
            title: "Início",
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
         }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ 
            title: "Perfil", 
            tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}