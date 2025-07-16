# 🌐 Projeto Angular 19 - Aplicação Institucional

Este projeto é uma **aplicação institucional em Angular 19**, desenvolvida como um SPA (Single Page Application), utilizando **componentes standalone**, **rotas protegidas**, **formulário reativo**, **consumo de dados com service**, **carrossel de imagens** e **rodapé global**.

---

## 🚀 Funcionalidades

- ✅ Navegação SPA entre páginas (Home, Sobre, Serviços, Contato)
- ✅ Componentes standalone com rotas configuradas
- ✅ Menu fixo e rodapé global
- ✅ Página inicial com **cards de produtos dinâmicos**
- ✅ Página "Sobre" com **carrossel de imagens automático**
- ✅ Página de login com autenticação simples (`adm/123`)
- ✅ **Rota protegida** com AuthGuard (Painel de Controle)
- ✅ Página de contato com **formulário reativo e validação**
- ✅ Layout responsivo com CSS externo e estrutura organizada

---

## 🧠 Tecnologias Utilizadas

- [Angular 19](https://angular.io/)
- TypeScript
- HTML5 e CSS3 (modularizados por componente)
- Reactive Forms (formulário reativo)
- Angular Router
- Standalone Components
- Flexbox para layout

---

## 🔐 Acesso Restrito (Login)

- **Usuário:** `adm`
- **Senha:** `123`
- Após o login, o usuário é redirecionado para a rota `/painel-controle`.

---

## ✨ Como Executar o Projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/SeuUsuario/seu-repositorio.git

# 2. Acessar a pasta do projeto
cd seu-repositorio

# 3. Instalar as dependências
npm install

# 4. Rodar a aplicação
ng serve

# 5. Acesse no navegador
http://localhost:4200

| Requisito                       | Status |
| ------------------------------- | ------ |
| Estrutura SPA com rotas         | ✅      |
| Componentes Standalone          | ✅      |
| Menu e Rodapé                   | ✅      |
| Página Home com cards dinâmicos | ✅      |
| Página Sobre com carrossel      | ✅      |
| Autenticação e rota protegida   | ✅      |
| Formulário de contato validado  | ✅      |

📌 Observações
As imagens do carrossel estão localizadas em src/public/img/

O projeto não utiliza backend, toda lógica de autenticação é feita em um AuthService

Os dados dos produtos são fornecidos via ProdutosService

📷 Screenshots
(Adicione aqui imagens da interface do projeto se quiser)

👨‍💻 Autor
Thiago de Assis
