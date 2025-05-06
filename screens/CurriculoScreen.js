import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

export default function CurriculoScreen({ route }) {
  const { curriculo } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: curriculo.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{curriculo.nome}</Text>
      <Text style={styles.profissao}>{curriculo.profissao}</Text>
      <Text style={styles.secao}>Resumo</Text>
      <Text style={styles.resumo}>{curriculo.resumo}</Text>
      <Text style={styles.secao}>Experiências</Text>
      <FlatList
        data={curriculo.experiencia}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Text style={styles.experiencia}>• {item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
  nome: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  profissao: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 18,
  },
  secao: { fontSize: 16, fontWeight: "bold", marginTop: 24, marginBottom: 4 },
  resumo: { fontSize: 15, color: "#333", marginBottom: 8 },
  experiencia: { fontSize: 15, color: "#444", marginBottom: 4 },
});