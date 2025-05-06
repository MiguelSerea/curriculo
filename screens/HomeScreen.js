import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

// Exemplo de currículos
const curriculos = [
  {
    id: "1",
    nome: "Ana Beatriz Silva",
    imagem: "https://randomuser.me/api/portraits/women/44.jpg",
    profissao: "Desenvolvedora Front-end",
    experiencia: [
      "2 anos como React.js Developer na Tech Solutions.",
      "1 ano como UX/UI Designer na DesignMais.",
      "5 meses como Estagiária de TI na SoftDev.",
    ],
    resumo:
      "Formada em Ciência da Computação. Apaixonada por tecnologia, interfaces acessíveis e desafios de desenvolvimento front-end.",
  },
  {
    id: "2",
    nome: "Carlos Eduardo Lima",
    imagem: "https://randomuser.me/api/portraits/men/55.jpg",
    profissao: "Analista de Dados",
    experiencia: [
      "3 anos como Data Scientist na InfoData.",
      "2 anos como Analista de BI em projetos de grandes empresas.",
    ],
    resumo:
      "Graduado em Estatística. Amplo conhecimento em Python, Power BI e análise de dados para decisões estratégicas.",
  },
  {
    id: "3",
    nome: "Juliana Souza",
    imagem: "https://randomuser.me/api/portraits/women/68.jpg",
    profissao: "Psicóloga Clínica",
    experiencia: [
      "5 anos de atendimento clínico em consultório próprio.",
      "Experiência em palestras e workshops sobre saúde mental.",
    ],
    resumo:
      "Especialista em psicologia clínica. Foco em abordagem humanizada, escuta ativa e bem-estar do paciente.",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Currículos</Text>
      <FlatList
        data={curriculos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Curriculo", { curriculo: item })}
          >
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.profissao}>{item.profissao}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 12 },
  card: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    padding: 12,
  },
  imagem: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 16,
  },
  info: { flex: 1 },
  nome: { fontSize: 18, fontWeight: "bold" },
  profissao: { fontSize: 15, color: "#555" },
});