# Desafio Catalogo empresa AeC


##Requisitos: 

Desenvolva uma aplicação de catálogo de produtos com as
seguintes funcionalidades:
1. Listagem de Produtos: Exiba uma lista de produtos a partir de um
arquivo JSON simulando uma API.
2. Detalhes do Produto: Ao clicar em um produto, exiba os detalhes
do mesmo.
3. Filtro e Pesquisa: Implemente um filtro e uma barra de pesquisa
para filtrar os produtos por nome ou categoria.
4. Responsividade: A aplicação deve ser responsiva para diferentes
dispositivos.
5. EXTRA: Adicionar ao Carrinho: Possibilidade de adicionar produtos
a um carrinho de compras, exibindo a quantidade total de itens no
carrinho.


## Instruções Instalação Local

git clone https://github.com/Lacqua-Developer/catalog-app.git

npm i

npm start


## Instruções Instalação Docker

export DOCKER_BUILDKIT=1
docker build -t catalog-app .

OBS: Não foi possível fazer um teste utilizando o Docker porque, na minha maquina a instalação do docker está com problema.