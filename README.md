# Gallery

Esse projeto trata-se de uma galeria de imagens, com um formulário de cadastro básico. Ela foi criada para ser uma ferramenta para armazenagem de imagens, possibilitando o uso delas mais facilmente em aplicações e outras atividades. Também serve se você quiser **só** guardar imagens.

### Construção

#### _Ferramentas_

- React com Typescript;
- Styled Components;
- Firebase
- Uuid4

#### _Sobre_

A aplicação faz upload de fotos para um banco de dados firebase, utilizei uma conta gratuita(Spark). Escolhi esse método por causa da simplicidade na configuração e porque era algo que eu já queria testar.

A integração com o banco de dados foi construída em um services separado da aplicação frontend, isso permite maior flexibilidade e segurança em casos de troca do banco de dados.

### Para testar a aplicação

1. Clone a aplicação.

2. Entre no diretório dp projeto e instale as dependências com o comando `npm install`.

3. Crie um arquivo **.env.local** na raiz do projeto e preencha conforme o exemplo do arquivo **.env.example**.

4. Execute o script start para iniciar a aplicação: `npm start`.

### Screenshots do funcionamento

#### _Galeria vazia_

![galeria vazia](https://raw.githubusercontent.com/felipelouzeiro/react-gallery/master/src/shared/images/tela-vazia.png?raw=true)

#### _Buscando imagens_

![carregando imagens](https://raw.githubusercontent.com/felipelouzeiro/react-gallery/master/src/shared/images/buscando-fotos.gif?raw=true)

#### _Adicionando Imagens_

![adicionando imagens](https://raw.githubusercontent.com/felipelouzeiro/react-gallery/master/src/shared/images/adicionando.gif?raw=true)

Feito com :heart:.
