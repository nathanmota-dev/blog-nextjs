# 📚 Blog Pessoal com Next.js

Este projeto é um blog simples construído com **Next.js**, **@next/mdx**, **TailwindCSS**, **React Icons** e **ShadCN UI**. O objetivo do blog é permitir a criação de novos posts de forma dinâmica, utilizando arquivos MDX. Cada arquivo MDX criado gera automaticamente uma rota, e o conteúdo é publicado em cada deploy, tornando a criação e manutenção de postagens fácil e eficiente.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**
- **[@next/mdx](https://mdxjs.com/)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[ShadCN UI](https://shadcn.dev/)**

## 💡 O que foi feito?

### 📝 Criação de Postagens Dinâmicas com MDX
A ideia principal do blog é permitir a criação de novos posts de forma dinâmica utilizando arquivos MDX. Com isso:
- Cada novo arquivo `.mdx` criado automaticamente gera uma rota correspondente no site.
- A cada novo commit que adiciona um arquivo `.mdx`, um novo deploy é feito, publicando o conteúdo no ar.

### 🗂️ Paginação e Ordenação de Postagens
- As postagens são paginadas e exibidas de acordo com a data de criação, onde os posts mais recentes aparecem primeiro.
- Há uma página inicial que lista todas as postagens disponíveis no blog com uma breve descrição, título e data de publicação.
  
### 📄 Página da Postagem
- Cada post tem sua própria página, criada automaticamente com base no arquivo MDX correspondente.
- O conteúdo do arquivo MDX pode incluir títulos, listas, imagens, componentes React personalizados e muito mais.

## 🔨 Requisitos

### Funcionalidades

#### 1. **Página Inicial - Lista de Postagens**
   - A página inicial lista todas as postagens do blog, exibindo:
     - **Título**: Nome do post.
     - **Descrição**: Uma breve descrição do conteúdo.
     - **Data de Publicação**: Recebida no formato `dd/mm/yyyy` e é exibida como frase.
     - **Link para o Post**: Direciona o usuário para a página completa do post.
   - As postagens são exibidas em ordem decrescente de acordo com a data de criação (postagens mais recentes aparecem primeiro).
   
#### 2. **Página da Postagem**
   - Cada post possui sua própria página gerada automaticamente com base no arquivo `.mdx`.
   - Cada arquivo `.mdx` criado é uma nova rota no blog, permitindo navegação direta.
   - O conteúdo pode incluir:
     - **Imagens**
     - **Headings** (títulos)
     - **Listas**
     - **Links**
     - **Componentes React personalizados**, como botões e alertas.

### 🖥️ Responsividade
- O layout é completamente responsivo, adaptado para dispositivos móveis, tablets e desktops.
- As postagens e a navegação do blog são otimizadas para garantir uma experiência de leitura agradável em todas as telas.

## 🛠️ Como Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/blog-next-mdx.git
   cd blog-next-mdx
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse o Blog**:
   - Abra o navegador e acesse `http://localhost:3000` para visualizar o blog em desenvolvimento.

## 🖼️ Exemplo de Postagem MDX

Aqui está um exemplo simples de como deve ser um arquivo MDX para criar uma postagem:

```mdx
---
title: "Meu Primeiro Post"
date: "2024-10-16"
topics: ["Next.js", "MDX", "React"]
description: "Um post de exemplo utilizando MDX com Next.js"
---

# Bem-vindo ao Meu Blog

Este é um exemplo de como utilizar **MDX** para criar um conteúdo dinâmico e interativo. Você pode misturar texto em Markdown com componentes React!

## Um Componente Personalizado

<MyButton>Click Me!</MyButton>

## Lista de Tópicos

- Tópico 1
- Tópico 2
- Tópico 3

```