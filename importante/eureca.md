# Histórico de Estudos: CRUD, APIs, Arquitetura MVC e Gestão Prática

Este documento reúne os conceitos fundamentais sobre manipulação de dados, comunicação entre sistemas, padrões de arquitetura de software e um plano prático de projetos gerenciados por metodologias de gestão (PMBOK, Scrum e Kanban).

---

## 1. O que é CRUD e qual sua relação com APIs?

**CRUD não é uma API**, mas ambos são conceitos usados em conjunto. 
* **CRUD** é o acrônimo para as quatro operações fundamentais em bancos de dados.
* **API** é a ponte (interface) que permite que diferentes sistemas se comuniquem.

Frequentemente, desenvolvedores criam uma API para que aplicações externas (como um aplicativo mobile ou site) possam executar operações CRUD em um banco de dados.

### Mapeamento CRUD para APIs RESTful

| Operação CRUD | Método HTTP na API | Descrição |
| :--- | :--- | :--- |
| **C**reate (Criar) | `POST` | Cria um novo dado. |
| **R**ead (Ler) | `GET` | Lê ou busca um dado existente. |
| **U**pdate (Atualizar) | `PUT` ou `PATCH` | Atualiza um dado existente. |
| **D**elete (Excluir) | `DELETE` | Remove um dado. |

---

## 2. Analogia do Restaurante: CRUD, API e API REST

Para entender a diferença de forma simples, imagine um restaurante:

* **O Banco de Dados (CRUD) é a Cozinha**: É o lugar onde a comida é guardada e manipulada. Na cozinha, você pode **colocar** novos ingredientes na geladeira (Create), **olhar** o que tem no estoque (Read), **trocar** o molho de um prato (Update) ou **jogar fora** comida estragada (Delete).
* **A API é o Garçom**: O cliente não vai até a cozinha pegar a comida. Ele pede ao garçom. A API leva o pedido até a cozinha e traz o prato pronto para a mesa. Ela é o meio de comunicação seguro.
* **A API REST é o Manual de Etiqueta do Garçom**: É o padrão que diz que o garçom deve vestir uniforme, anotar o pedido em um bloco padrão, usar termos específicos (como "Entrada", "Prato Principal") e servir de forma padronizada. REST é uma API que segue regras universais (padrões HTTP).

---

## 3. Expandindo para MVC e Padrões de Projeto

À medida que o sistema cresce, precisamos organizar o código de forma inteligente.

* **Padrão de Projeto (Design Pattern):** É uma solução genérica e comprovada para um problema recorrente no desenvolvimento de software. Funciona como uma planta baixa ou receita que evita reinventar a roda.
* **MVC (Model-View-Controller):** É um padrão de arquitetura de software específico que divide o código do sistema em três camadas isoladas.

### Integrando tudo na Analogia do Restaurante

[ CLIENTE ] ──(Faz o pedido via API REST)──> [ CONTROLADOR (Garçom) ]│         ▲(Pede dados) (Traz dados)▼         │[ MODELO (Cozinha/CRUD) ]


1. **Padrão de Projeto**: É o **modelo de franquia** do restaurante. Dita as regras gerais de funcionamento para evitar o caos organizacional.
2. **Camadas do MVC**:
   * **Model (Modelo - A Cozinha/CRUD)**: Gerencia os dados e as regras de negócio. Mexe direto na geladeira (Banco de Dados) executando o **CRUD**.
   * **View (Visão - O Prato Decorado)**: É o formato final entregue ao cliente. Em uma API, a "View" geralmente não é uma tela colorida, mas sim a estrutura de dados textual (como o formato **JSON**).
   * **Controller (Controlador - O Garçom)**: Intermediário. Recebe a requisição externa da API, valida o que foi pedido, aciona o Model (Cozinha) correspondente e devolve o resultado para o cliente.

---

## 4. Planejamento Prático para Dev Solo (Stack: PHP, MySQL, JS/React)

Para aplicar esses conceitos de forma prática, o desenvolvimento individual pode ser estruturado usando metodologias de gestão adaptadas:
* **PMBOK**: Usado no início para definir o escopo fechado (o que o projeto entrega e o que ele não entrega).
* **Scrum**: Organização do tempo em Sprints (ciclos de 1 semana) planejando o que será feito e revisando o progresso ao final.
* **Kanban**: Visualização do fluxo de trabalho no Trello/Notion com colunas simples (*A Fazer*, *Em Desenvolvimento*, *Teste*, *Concluído*).

Abaixo estão 3 escopos de projetos para aprendizado focado e consciente:

### Projeto 1 (Principal): Sistema de Comandas do Restaurante
* **O que DEVE ter:**
  * **Model (MySQL/PHP):** Uma única tabela `comandas` (id, numero_mesa, pedido, status, valor).
  * **CRUD:** Criar nova comanda (C), Listar comandas ativas (R), Alterar o pedido/status (U), Fechar/deletar comanda (D).
  * **API REST:** Rotas claras no PHP recebendo e devolvendo JSON (ex: `GET /comandas`, `POST /comandas`).
  * **Controller (PHP):** Arquivo que recebe a requisição HTTP, valida se a mesa existe e aciona o banco.
  * **View (React ou HTML/JS):** Uma tela simples de painel para o garçom clicar em "Novo Pedido" ou "Concluir Prato".
* **O que NÃO deve ter:**
  * Autenticação de usuários ou login de garçons.
  * Cadastro individualizado de itens do cardápio (o pedido deve ser um campo de texto livre/escrito à mão).
  * Integração com gateways de pagamento reais.

### Projeto 2 (Exercício): Gerenciador de Tarefas Pessoais (Todo List)
* **O que DEVE ter:**
  * **Model (MySQL/PHP):** Uma tabela `tarefas` (id, titulo, descricao, concluida, criada_em).
  * **CRUD:** Adicionar tarefa (C), Ver lista de pendentes (R), Marcar como concluída usando o método HTTP `PATCH` (U), Excluir tarefa (D).
  * **Controller (PHP):** Lógica para filtrar tarefas concluídas das pendentes antes de responder ao cliente.
  * **View (React ou HTML/JS):** Duas colunas visuais simples na tela: "A Fazer" e "Concluídas".
* **O que NÃO deve ter:**
  * Categorias, tags ou prioridades.
  * Divisão de tarefas por múltiplos usuários (sistema focado em usuário único).
  * Subtarefas ou checklists internos.

### Projeto 3 (Exercício): Catálogo de Livros ou Filmes Preferidos
* **O que DEVE ter:**
  * **Model (MySQL/PHP):** Uma tabela `midias` (id, titulo, genero, nota, comentario).
  * **CRUD:** Cadastrar mídia (C), Listar com barra de busca (R), Editar nota (U), Remover do catálogo (D).
  * **API REST:** Suporte a parâmetros e filtros diretamente na URL (ex: `GET /midias?genero=Acao`).
  * **Controller (PHP):** Montagem dinâmica da query SQL (cláusula `WHERE`) baseada nos filtros da API.
  * **View (React ou HTML/JS):** Feed de cards simples exibindo os itens salvos com um campo de busca no topo.
* **O que NÃO deve ter:**
  * Upload de arquivos de imagem (use links externos da internet para as capas ou ícones padrão).
  * Sistema de comentários ou avaliações de múltiplos usuários.
  * Links ou players para assistir/baixar o conteúdo.