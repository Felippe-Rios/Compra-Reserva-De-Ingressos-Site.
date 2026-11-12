# e-Ticket

Projeto de estudo de lógica de programação: uma página para simular a compra de ingressos. A interface mostra a quantidade disponível por setor e atualiza o estoque quando uma compra é realizada.

## Funcionalidades

- Selecionar um setor: pista, cadeira superior ou cadeira inferior.
- Informar a quantidade de ingressos (o campo da página indica valores de 1 a 10).
- Conferir o estoque disponível de cada setor.
- Atualizar o estoque e exibir uma mensagem após a compra, ou avisar quando não há ingressos suficientes.

O estoque começa com 100 ingressos para pista, 200 para cadeira superior e 400 para cadeira inferior. Como o projeto não usa servidor nem armazenamento persistente, os valores voltam ao inicial quando a página é recarregada.

## Como executar

Não é necessário instalar dependências. Abra o arquivo `index.html` em um navegador. Se preferir, use a extensão Live Server no Visual Studio Code para servir a página localmente.

## Tecnologias

- HTML para a estrutura da página.
- CSS para o layout e a apresentação visual.
- JavaScript para processar as compras e atualizar os valores na tela.

## Estrutura do projeto

```text
.
├── assets/          # Imagens, ilustrações e ícones
├── js/
│   └── app.js       # Lógica de compra e atualização do estoque
├── styles/
│   ├── _reset.css   # Estilos de normalização
│   └── style.css    # Estilos da aplicação
├── index.html       # Página principal
└── README.md
```
