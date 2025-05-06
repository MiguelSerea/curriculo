COMO INICIAR O PROJETO CURRÍCULOS (EXPO + REACT NATIVE)

1. PRÉ-REQUISITOS
-----------------
- Node.js e npm instalados (https://nodejs.org/)
- Expo CLI instalada globalmente:
  npm install -g expo-cli

2. CRIAÇÃO DO PROJETO (CASO AINDA NÃO TENHA CRIADO)
---------------------------------------------------
expo init curriculos-app
# Escolha o template "blank (TypeScript)" ou "blank" (JavaScript)
cd curriculos-app

3. INSTALAÇÃO DO REACT NAVIGATION (STACK NAVIGATOR)
---------------------------------------------------
npm install @react-navigation/native
npm install @react-navigation/native-stack

# Dependências necessárias para o React Navigation funcionar no Expo:
expo install react-native-screens react-native-safe-area-context

4. ESTRUTURA DE PASTAS RECOMENDADA
-----------------------------------
curriculos-app/
  App.js
  screens/
    HomeScreen.js
    CurriculoScreen.js
  assets/
    # (caso use imagens locais)

5. COMO RODAR O PROJETO
-----------------------
expo start
# Siga as orientações do Expo para rodar no navegador ou no celular via Expo Go.

6. RESUMO DAS TECNOLOGIAS USADAS
--------------------------------
- Expo: facilita o desenvolvimento mobile.
- React Native: estrutura base do app.
- React Navigation (@react-navigation/native + @react-navigation/native-stack): navegação entre telas.
- react-native-screens e react-native-safe-area-context: dependências obrigatórias do React Navigation.

7. USO DE IMAGENS
-----------------
- Use URLs diretas de fotos (exemplo: https://randomuser.me/api/portraits/men/1.jpg)
- Ou salve imagens na pasta assets/ e utilize require('../assets/sua-imagem.jpg') no seu código.

8. COMO ADICIONAR INFORMAÇÕES DE PROFISSIONAIS
----------------------------------------------
- Os profissionais ficam em um array dentro do arquivo HomeScreen.js.
- Para adicionar mais, basta incluir novos objetos com: nome, foto, profissão, formação, experiência e contato.

9. COMO SUBIR O APP PARA O GITHUB
---------------------------------
git init
git add .
git commit -m "Projeto inicial de app de currículos"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main

====================
PRONTO! Agora é só rodar, editar e testar seu aplicativo pelo Expo.
Dúvidas? Consulte a documentação oficial do React Native e Expo.
