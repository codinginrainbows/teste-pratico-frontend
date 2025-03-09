# BeTalent – Projeto Front-end

Este é um **teste técnico** desenvolvido para uma **vaga na empresa BeTalent**.

---

## Como Rodar o Projeto

### 1. Clonar o Repositório

Abra um terminal e execute:

```bash
git clone https://github.com/codinginrainbows/teste-pratico-frontend
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

- **Responsabilidade**: Montar o layout final da página e passar os dados da API aos componentes dela.
- **Exemplo**: `Home.tsx`

### 2. Components

- **Responsabilidade**: Renderizar partes específicas da UI, recebendo props prontas (sem buscar/manipular dados).
- **Exemplo**: `Header`, `SearchBar`, `Table`, `EmployeeList`, `EmployeeRow`, `EmployeeDetails`

### 3. Hooks

- **Responsabilidade**: Encapsular lógica de manipulação de dados com uma interface clara.
- **Exemplo**: `useFetcher`, `useFilterEmployees`

### 4. Utils

- **Responsabilidade**: Fornecer funções auxiliares sem dependências do JSX.
- **Exemplo**: `dateFormatter.ts`, `phoneFormatter.ts`

### 5. Common

- **Responsabilidade**: Centralizar interfaces e constants que representem o domínio.
- **Exemplo**: `employee.ts`, `searchFields.ts`

---

## Testes

Para rodar os testes unitários, dentro de `my-app`:

```bash
npm test
```

- Os testes utilizam **Jest** e **Testing Library**.
- Cada componente possui um arquivo de teste dedicado (ex.: `EmployeeRow.test.tsx`, `EmployeeDetails.test.tsx`).

---

## Features

- Consumir dados de um **JSON Server** local.
- Visualizar uma **tabela**.
- Pesquisar funcionários por nome, cargo ou telefone.
- Exibir detalhes de cada funcionário ao expandir na versão mobile.

---

## Tecnologias Utilizadas

- TypeScript
- React
- Vite
- CSS Modules
- JSON Server para simular API
- Jest + Testing Library para testes unitários

