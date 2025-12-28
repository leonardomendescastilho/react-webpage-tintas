# Git Helper

Guia rápido para fluxo de trabalho Git.

---

## 1. Verificar Modificações

```bash
# Ver estado atual (arquivos modificados, staged, untracked)
git status

# Ver resumo das mudanças (arquivos e linhas alteradas)
git diff --stat

# Ver mudanças detalhadas (não staged)
git diff

# Ver mudanças staged (prontas para commit)
git diff --staged

# Ver histórico recente
git log --oneline -10
```

---

## 2. Branch Names (Padrão de Mercado)

| Tipo | Prefixo | Exemplo |
|------|---------|---------|
| Nova feature | `feature/` | `feature/add-login-button` |
| Correção de bug | `fix/` | `fix/navbar-overflow` |
| Hotfix (urgente) | `hotfix/` | `hotfix/critical-auth-bug` |
| Refatoração | `refactor/` | `refactor/api-services` |
| Documentação | `docs/` | `docs/update-readme` |
| Manutenção | `chore/` | `chore/update-dependencies` |
| Testes | `test/` | `test/add-unit-tests` |

**Dicas:**
- Use kebab-case (palavras-separadas-por-hifen)
- Seja descritivo mas conciso
- Inclua ticket/issue se houver: `feature/PROJ-123-add-login`

---

## 3. Commits (Conventional Commits)

### Formato

```
<tipo>(<escopo>): <descrição curta>

<corpo opcional>

<rodapé opcional>
```

### Tipos de Commit

| Tipo | Uso |
|------|-----|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `style` | Formatação (sem mudança de lógica) |
| `refactor` | Refatoração de código |
| `test` | Adição/modificação de testes |
| `chore` | Tarefas de manutenção |
| `perf` | Melhorias de performance |
| `ci` | Configuração de CI/CD |
| `build` | Build system ou dependências |

### Exemplos

**Simples:**

```bash
git commit -m "feat: adiciona botão de login"
git commit -m "fix: corrige overflow na navbar"
git commit -m "docs: atualiza README com instruções de instalação"
git commit -m "refactor: simplifica lógica de autenticação"
git commit -m "chore: atualiza dependências do projeto"
```

**Completo:**

```bash
git commit -m "feat(auth): adiciona botão de login na navbar

- Implementa componente LoginButton
- Adiciona integração com API de autenticação
- Inclui validação de formulário
- Adiciona estados de loading e erro

Closes #123"
```

---

## 4. Pull Request (PR)

### Template de PR

```markdown
## Descrição

Breve descrição do que foi feito e por quê.

## Tipo de Mudança

- [ ] Bug fix (correção que não quebra funcionalidades existentes)
- [ ] Nova feature (funcionalidade que não quebra existentes)
- [ ] Breaking change (correção/feature que quebra funcionalidades existentes)
- [ ] Documentação
- [ ] Refatoração

## Como Testar

1. Passo 1
2. Passo 2
3. Resultado esperado

## Checklist

- [ ] Código segue os padrões do projeto
- [ ] Self-review realizado
- [ ] Comentários adicionados em código complexo
- [ ] Documentação atualizada
- [ ] Testes adicionados/atualizados
- [ ] Todos os testes passando
- [ ] Sem warnings no lint

## Screenshots (se aplicável)

| Antes | Depois |
|-------|--------|
| img   | img    |

## Issues Relacionadas

Closes #123
```

### Exemplo Real de PR

**Título:** `feat(auth): adiciona autenticação com Google OAuth`

**Corpo:**

```markdown
## Descrição

Implementa autenticação via Google OAuth 2.0, permitindo que usuários
façam login com suas contas Google.

## Tipo de Mudança

- [x] Nova feature

## Como Testar

1. Acesse a página de login
2. Clique em "Entrar com Google"
3. Autorize o app
4. Deve redirecionar para dashboard logado

## Checklist

- [x] Código segue os padrões do projeto
- [x] Self-review realizado
- [x] Testes adicionados
- [x] Variáveis de ambiente documentadas

Closes #45
```

---

## 5. Fluxo Completo (Exemplo)

```bash
# 1. Criar branch
git checkout -b feature/add-contact-form

# 2. Fazer alterações e verificar
git status
git diff

# 3. Adicionar arquivos
git add .
# ou específicos:
git add src/components/ContactForm.tsx

# 4. Commit
git commit -m "feat(contact): adiciona formulário de contato"

# 5. Push
git push -u origin feature/add-contact-form

# 6. Criar PR (via GitHub CLI)
gh pr create --title "feat(contact): adiciona formulário de contato" --body "..."
```
