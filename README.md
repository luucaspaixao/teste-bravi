<h2 align="center">
  Teste Bravi
</h2>
<p align="center">
Teste entrevista empresa Bravi.
</p>

Passos de execução do projeto.

- Teste 1
1. Acessar a pasta teste-1
2. Rodar no terminal "node index.js"

Caso necessário mais testes com diferentes sequencias de colchetes, na linha 27 do arquivo index.js tem o array onde tem os testes.

- Teste 2 e 3

Foi utilizado docker para facilitar as execuções e para banco de dados o MySql.
1. Na pasta raíz do projeto, rodar no terminal "docker-compose up -d"
2. Pronto, o backend estará rodando na porta 3333, e o frontend na porta 3000.

Obs.: Caso ao entrar na tela do front, ocorra algum erro, é necessário restartar o backend digitando no terminal "docker restart nodejs"

No frontend, no botão "Adicionar pessoas", adiciona-se pessoas que terão lista de contatos.
Para adicionar um contato, clicar no ícone de contatos ao lado esquerdo do ícone de editar, selecionar no input de select uma pessoa existente,
e clicar no botão "Adicionar contato".
O botão editar apenas edita os dados da pessoa, e não os contatos em si.

Feito por: Lucas Rodrigues Paixão
