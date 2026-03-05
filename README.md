Dev Board
Aplicação desenvolvida para praticar o CRUD clássico — Create, Read, Update e Delete — utilizando React e Tailwind CSS com JSON Server como API simulada.
O projeto foi um passo importante na minha jornada como desenvolvedora front-end, consolidando conceitos fundamentais que pretendo aplicar no e-commerce que estou construindo. De bônus, aproveitei para adicionar eu e minha mãe na lista. 💜

✨ Funcionalidades

Cadastrar profissionais com nome, profissão e nível
Listar todos os cadastros
Editar informações de um profissional
Deletar um profissional da lista


🛠️ Tecnologias utilizadas

React
Tailwind CSS
JSON Server
Vite


📁 Estrutura do projeto
src/
├── components/
│   ├── TaskForm.jsx    → formulário de criação e edição
│   ├── TaskList.jsx    → lista de profissionais
│   └── TaskItem.jsx    → card individual de cada profissional
├── services/
│   └── taskService.js  → chamadas à API (GET, POST, PUT, DELETE)
└── App.jsx             → estado global e orquestração

🚀 Como rodar localmente
Pré-requisitos: Node.js instalado na sua máquina.
bash# 1. Clone o repositório
git clone https://github.com/seu-usuario/dev-board.git

# 2. Entre na pasta do projeto
cd dev-board

# 3. Instale as dependências
npm install

# 4. Inicie o JSON Server
npx json-server --watch src/backend/db.json --port 3000

# 5. Em outro terminal, inicie o projeto
npm run dev
Acesse em: http://localhost:5174

📚 O que aprendi

Componentização no React
Gerenciamento de estado com useState
Busca de dados na montagem com useEffect
Comunicação entre componentes via props e callbacks
Consumo de API REST com fetch
Operações CRUD completas


👩‍💻 Desenvolvedora
Feito com dedicação por Ana Carolina Teixeira
LinkedIn • GitHub
