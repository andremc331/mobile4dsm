import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import logo from "../../assets/adaptive-icon.png";

export default function Onze() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Opção 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Opção 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Opção 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Opção 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: { width: 140, height: 140, marginBottom: 20 },
  row: { flexDirection: "row", marginBottom: 10 },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    width: 120,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});