import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useCep } from "../hooks/useCep";

export default function HistoricoScreen() {
  const { historico } = useCep();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {historico.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>CEP: {item.cep}</Text>
          <Text>Rua: {item.logradouro}</Text>
          <Text>Bairro: {item.bairro}</Text>
          <Text>Cidade: {item.localidade}</Text>
          <Text>UF: {item.uf}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});