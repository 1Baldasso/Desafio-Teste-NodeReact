# DESAFIO
Esse repositório contém os arquivos de uma aplicação desenvolvida como parte de um processo seletivo.

Os requisitos do teste seguem
Teste:
Listagem de produtos
#### Frontend React publicado:
 - Search por nome do produto
 - Tela de detalhes do produtos
 - Filtro por categoria (ex: frios, laticínios)
 - Ordenação (ex: menor preço, maior preço, nome)
 - Botão de adicionar e remover do carrinho de compras
 - Carrinho de compras (não é necessário implementar checkout) apenas valor total no carrinho

#### Backend com Node publicado:
 - Api REST
 - Testes unitários
 - Boas práticas clean code
 - Documentar o código
Banco de dados
 - MongoDB

## Para executar localmente

Crie uma pasta para execução do projeto.

Com o terminal do git aberto na pasta criada execute o comando
```
git clone https://github.com/1Baldasso/Desafio-Teste-NodeReact
```

Entre na pasta do projeto com o comando 
```
cd Desafio-Teste-NodeReact
```

Abra o Visual Studio Code com o comando 
```
code .
```

Feche o terminal.

Entre ou crie uma conta no MongoDB Atlas através [deste link](https://www.mongodb.com/cloud/atlas/register)

Crie uma organização e um projeto.

Crie um banco de dados com as configurações de preferência

Clique no botão Connect 

![image](https://user-images.githubusercontent.com/82400557/230063281-f9bebfb2-c82a-4005-af19-628e490cbb11.png)

Connect you application

![image](https://user-images.githubusercontent.com/82400557/230063498-f39292ca-8353-4a0e-bcb0-0fb55eb0ceee.png)

Com essas configurações selecionadas, copie a string de conexão que estará aparecendo abaixo.

![image](https://user-images.githubusercontent.com/82400557/230063597-33b23e77-0701-426e-93bc-d793945977fa.png)

No VSCode, vá para a pasta de backend, abra o arquivo ```.env.example```

Cole a string de conexão no lugar de MONGODB.CONNECTIONSTRING

![image](https://user-images.githubusercontent.com/82400557/230064109-eddaf674-b2f7-4786-b85c-09a7a73850f9.png)

salve o arquivo e renomeie ele para ```.env```

Ainda no VSCode, abra duas guias de terminal com o comando ```Ctrl + "``` duas vezes

Em um dos terminais acesse a pasta de backend com o comando
```
cd backend
```
Instale as dependencias com o comando
```
npm install
```
Após a instalação execute a aplicação com o comando 
```
npm start
```

Repita os passos acima no outro terminal para a pasta frontend
```
cd frontend
```
Instale as dependencias com o comando
```
npm install
```
Após a instalação execute a aplicação com o comando 
```
npm start
```

Produtos Controller
Esse controlador é responsável por gerenciar as rotas relacionadas a produtos.

## Rotas
### POST /produtos
Cria um novo produto.

Parâmetros da requisição

- **createProdutoDto**: objeto contendo as informações do novo produto a ser criado.

Retorno da requisição

- **200** OK: a requisição foi bem sucedida e o produto foi criado.

### GET /produtos
Busca todos os produtos cadastrados ou filtra produtos por nome e/ou categoria.

Parâmetros da requisição

- **nome** (opcional): nome do produto a ser filtrado.

- **categoria** (opcional): categoria do produto a ser filtrado.

Retorno da requisição

- **200** OK: a requisição foi bem sucedida e retorna um array com todos os produtos encontrados de acordo com os filtros aplicados, ou todos os produtos caso não tenha sido aplicado nenhum filtro.

###GET /produtos/:id
Busca um produto específico pelo ID.

Parâmetros da requisição

- **id**: ID do produto a ser buscado.

Retorno da requisição

- **200** OK: a requisição foi bem sucedida e retorna o produto correspondente ao ID informado.

### PATCH /produtos/:id

Atualiza as informações de um produto específico pelo ID.



Parâmetros da requisição

- **id**: ID do produto a ser atualizado.

- updateProdutoDto: objeto contendo as informações atualizadas do produto.

Retorno da requisição

- **200** OK: a requisição foi bem sucedida e retorna um objeto com a mensagem "Updated" e o objeto atualizado correspondente ao ID informado.
### DELETE /produtos/:id

Remove um produto específico pelo ID.


Parâmetros da requisição

- **id**: ID do produto a ser removido.

Retorno da requisição

- **200** OK: a requisição foi bem sucedida e retorna um objeto com a mensagem "Object removed successfully" e o objeto removido correspondente ao ID informado.
