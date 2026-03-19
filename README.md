# Template Padrão - Projeto com Tabs

Este é um projeto base (template) pré-configurado com navegação em abas (tabs) utilizando React Native e Expo. Siga o passo a passo abaixo para iniciar o seu novo aplicativo a partir deste modelo.

## 🚀 Passo a Passo para Configuração

### 1. Clonar o repositório
Abra o seu terminal e faça o clone deste projeto para a sua máquina:
```bash
git clone https://github.com/wellingtoncorreia/layout-completo.git
```

### 2. Entrar na pasta do projeto
Acesse a pasta que acabou de ser clonada:
```bash
cd layout-completo
```

### 3. Instalar as dependências
Ainda no terminal, instale todas as bibliotecas necessárias para o projeto rodar. É importante usar a flag indicada para evitar conflitos de versão:
```bash
npm install --legacy-peer-deps
```

### 4. Fechar o terminal e renomear a pasta
- Após a conclusão da instalação, **feche o terminal**.
- Vá até o gerenciador de arquivos do seu computador, encontre a pasta `layout-completo` e **renomeie a pasta** para o nome do seu novo projeto (por exemplo: `meu-app-incrivel`).

### 5. Configurar o novo nome no VS Code
- Abra a nova pasta (já renomeada) no **Visual Studio Code**.
- Na barra lateral esquerda, clique no ícone da **Lupa** (Pesquisar / *Search*).
- No campo **Pesquisar** (Search), digite: `layout-completo`
- No campo **Substituir** (Replace), digite o **novo nome do seu projeto**.
- Clique no ícone de **Substituir Tudo** (*Replace All* ou atalho `Ctrl + Alt + Enter`) para aplicar o novo nome em todos os arquivos necessários (como `app.json`, `package.json`, etc.).

### 6. Preparar o Emulador
Abra o **Android Studio** e inicie o seu emulador Android (Virtual Device). Aguarde até que o Android carregue completamente.

### 7. Executar o projeto limpando o cache
Volte para o VS Code, abra um novo terminal integrado (`Ctrl + '` ou `Terminal > Novo Terminal`) e execute o comando abaixo para iniciar o servidor do Expo já limpando o cache:
```bash
npx expo start -c
```
*(No terminal do Expo, pressione a tecla `a` para abrir o aplicativo diretamente no emulador Android).*

---

🎉 **Pronto!** O seu projeto já está configurado com o novo nome, rodando no emulador e pronto para ser modificado. Bom código!
