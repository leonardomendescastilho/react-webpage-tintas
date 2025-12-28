# git-helper

Analisa mudanças Git e gera branch, commit e PR seguindo Conventional Commits.

## Quando usar

- Antes de fazer commit
- Para criar Pull Requests
- Para criar nova branch

## Instruções

### Passo 1: Analise o estado atual do Git

Execute os comandos:
- `git status` para ver arquivos modificados
- `git diff --stat` para resumo das mudanças
- `git branch --show-current` para branch atual
- `git log main..HEAD --oneline` para commits da branch atual

### Passo 2: Gere as 3 sugestões

**Tipos (para branch e commit):**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (sem mudança de lógica)
- `refactor`: Refatoração de código
- `test`: Testes
- `chore`: Manutenção
- `perf`: Performance

### Passo 3: Apresente ao usuário

SEMPRE apresente neste formato exato, com comandos prontos para copiar.
IMPORTANTE: O corpo do PR deve SEMPRE estar dentro de um bloco de código markdown para facilitar cópia.

## 🌿 Branch

`git checkout -b <tipo>/<nome-descritivo>`

## 📝 Commit

`git add -A && git commit -m "<tipo>(<escopo>): <descrição>"`

## 📋 PR

**Título:** `<tipo>(<escopo>): <descrição>`

**Corpo:** (em bloco markdown para copiar)
~~~markdown
## Descrição
<breve descrição>

## Mudanças
- <mudança 1>
- <mudança 2>

## Como Testar
1. <passo 1>
2. <passo 2>
~~~

## Exemplo de saída

## 🌿 Branch

`git checkout -b feat/user-authentication`

## 📝 Commit

`git add -A && git commit -m "feat(auth): adiciona sistema de login com validação"`

## 📋 PR

**Título:** `feat(auth): adiciona sistema de login`

**Corpo:**
~~~markdown
## Descrição
Implementa autenticação de usuários com validação de credenciais.

## Mudanças
- Adiciona componente LoginForm
- Adiciona validação de email e senha
- Integra com API de autenticação

## Como Testar
1. Executar `npm run dev`
2. Acessar /login
3. Testar com credenciais válidas e inválidas
~~~
