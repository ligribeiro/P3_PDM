# P3_PDM
# Minha Saúde Hoje 📱

Este projeto é um protótipo funcional de um dashboard mobile feito com **React Native + Expo**, desenvolvido para a disciplina **Programação para Dispositivos Móveis I (FATEC Jacareí)**.

---

## 🎯 Objetivo

Exibir indicadores simulados de bem-estar pessoal de forma simples e intuitiva:

- 🦶 Quantidade de passos no dia  
- 💤 Horas de sono  
- 💧 Nível de hidratação (litros)  
- ❤️ Frequência cardíaca média  

---

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Hooks (`useState`, `useEffect`)
- `Linking` para acesso externo

---

## 📁 Estrutura do projeto

```
minha-saude-hoje/
├── App.tsx
├── components/
│   └── IndicatorCard.tsx
├── screens/
│   └── Dashboard.tsx
```

---

## ▶️ Como executar

1. Extraia o `.zip` em uma pasta simples, ex:
   ```
   C:\Projetos\minha-saude-hoje
   ```

2. Abra o terminal e acesse a pasta:
   ```
   cd minha-saude-hoje
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Inicie o servidor Expo:
   ```
   npm start
   ```

5. Escaneie o QR Code com o app **Expo Go** no seu celular.

---

## 🔗 Acesso rápido

Você pode testar diretamente no navegador (ou gerar QR) usando o [Expo Snack](https://snack.expo.dev)

---

## ✅ Observações da avaliação

- ✅ Dados simulados com `useEffect`
- ✅ Sem uso de banco de dados
- ✅ Sem autenticação
- ✅ Estilização com sombra (shadow tree)
- ✅ Link externo funcional com `Linking.openURL(...)`
- ✅ Projeto organizado com pastas `screens` e `components`

---

Desenvolvido por: **Ligia Ribeiro de Almeida** ✨
