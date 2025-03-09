# BeTalent – Projeto Front-end

Este é um **teste técnico** desenvolvido para uma **vaga na empresa BeTalent**.

---

## Features

- Consumir dados de um **JSON Server** local.
- Visualizar uma **tabela**.
- Pesquisar funcionários por nome, cargo ou telefone.
- Exibir detalhes de cada funcionário ao expandir na versão mobile.

---

## Como Rodar o Projeto

### 1. Clonar o Repositório

Abra um terminal e execute:

```bash
git clone [url-do-repositório](https://github.com/codinginrainbows/teste-pratico-frontend/tree/main)
cd teste-pratico-frontend
```

### 2. Iniciar o Servidor JSON

Na **raiz** do repositório (onde está o arquivo `db.json`):

```bash
npx json-server --watch db.json --port 3000
```

- O servidor iniciará em `http://localhost:3000` (por padrão).
- Para mudar a porta, use `--port numero_da_porta`.

### 3. Rodar o App React

Entre na pasta `my-app`:

```bash
cd my-app
```

#### a) Instale as dependências:

```bash
npm install
```

#### b) Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

- Abra o navegador em `http://localhost:5173`

---

## Camadas e Responsabilidades

<img width="839" alt="Screenshot 2025-03-08 at 22 07 33" src="https://github.com/user-attachments/assets/02b58281-3f3d-419a-b355-b30baf4a3afd" />

A aplicação segue **5 camadas principais**, conforme ilustrado no diagrama. Cada pasta no projeto representa uma camada, com responsabilidades específicas:

### 1. Templates

- **Responsabilidade**: Montar o layout final da página, obtendo dados (API ou outros) e repassando aos componentes.
- **Exemplo**: `Home.tsx`

### 2. Components

- **Responsabilidade**: Renderizar partes específicas da UI (botões, tabelas, listas, cabeçalhos etc.), recebendo props e sem buscar dados por conta própria.
- **Exemplo**: `Header`, `SearchBar`, `Table`, `EmployeeList`, `EmployeeRow`, `EmployeeDetails`

### 3. Hooks

- **Responsabilidade**: Encapsular lógica de manipulação de dados, estados e efeitos, oferecendo uma interface clara e reutilizável (por ex.: fetch, filtro).
- **Exemplo**: `useFetcher`, `useFilterEmployees`

### 4. Utils

- **Responsabilidade**: Fornecer funções auxiliares (por ex. formatar datas, telefones) sem dependência de React/JSX.
- **Exemplo**: `dateFormatter.ts`, `phoneFormatter.ts`

### 5. Common

- **Responsabilidade**: Centralizar tipos, interfaces e constantes que representam o domínio (ex.: IEmployee), usados em todo o projeto.
- **Exemplo**: `employee.ts`, `searchFields.ts`

---

## Testes

Para rodar os testes unitários, dentro de `my-app`:

```bash
npm test
```

- Os testes utilizam **Jest** e **Testing Library**.
- Cada componente/hook possui arquivos de teste dedicados (ex.: `EmployeeRow.test.tsx`, `useFetcher.test.ts`).

---

## Tecnologias Utilizadas

- TypeScript
- React
- Vite
- CSS Modules
- JSON Server para simular API
- Jest + Testing Library para testes unitários
