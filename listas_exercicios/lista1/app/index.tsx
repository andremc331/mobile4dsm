import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function MenuScreen() {
  const router = useRouter();
  const nomesRotas = [
    "Um", "Dois", "Tres", "Quatro", "Cinco", "Seis",
    "Sete", "Oito", "Nove", "Dez", "Onze"
  ] as const;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {nomesRotas.map((nome, index) => (
        <TouchableOpacity
          key={nome}
          style={{
            marginVertical: 10,
            padding: 20,
            backgroundColor: '#4CAF50',
            borderRadius: 10,
            width: '80%',
            alignItems: 'center',
          }}
          onPress={() => router.push(`/${nome}`)}
        >
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
            Ir para Exercício {index + 1}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}