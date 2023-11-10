# Memoteca

# Sobre o projeto 
A aplicação Memoteca é uma aplicação Angular, sendo um mural de pensamentos. Nele você poderá colocar citações de livros, trechos de música, e aquelas frases legais que você quer deixar de reserva para postar como legenda em suas selfies.

O projeto foi feito de acordo os cursos;

- Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD
- Angular 14: evoluindo a aplicação
  
 Presente na Alura.

# Layout

- Página Inicial
  
![paginaInicial](https://github.com/luc05/Memoteca/assets/27972551/7e48b065-d6f3-41a8-858e-2bed3938abc8)
)

- Formulário de criação/edição de pensamentos
  
![formulario](https://github.com/luc05/Memoteca/assets/27972551/7cc65533-dfc8-43f4-817a-6b0a6acd1096)

# 🔨 Funcionalidades do projeto

A aplicação possui todas as funcionalidades CRUD, criar, listar, editar e excluir pensamentos.

Na tela inicial e possivel filtrar por palavra chave, ou por mensagem. Além de ser possivel favoritar e desfavoritar as mesmas.

E existe 2 mural, o geral e um somente com os favoritos, que podem ser alternados ao clicar nos botões correspondentes.

# Tecnologias utilizadas

## Front End

### Angular:
-TypeScript
-HTML
-CSS

Na criação formúlario foi usado a classe [FormBuilder], para torna-lo reativo.

Foi usado a diretiva [FormGroup], para fazer a ligação desse formúlario ao form do HTML.

E a propriedade [FormControlName] em cada um dos atributos.

## Back End
-Foi utilizado o JSON-Server para simular uma API REST

# Como executar o projeto

Após clonar o projeto.
1) npm i - baixa todas dependências necessárias.
2) No diretorio memoteca - rode ng serve - roda a aplicação front-end
3) No diretorio backend - rode npm start - roda a aplicação back-end
   
   Obs: Ambos os diretorios estão dentro do projeto clonado.
