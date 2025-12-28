# git-helper

Analisa mudanças Git e gera commits/PRs seguindo Conventional Commits.

## Quando usar

- Antes de fazer commit
- Para criar Pull Requests
- Para verificar estado do repositório

## Instruções

Ao executar esta skill:

1. **Analise o estado atual do Git:**
   - Execute `git status` para ver arquivos modificados
   - Execute `git diff --stat` para resumo das mudanças
   - Execute `git log --oneline -5` para commits recentes

2. **Gere sugestões baseadas nas convenções:**

   **Tipos de commit:**
   - `feat`: Nova funcionalidade
   - `fix`: Correção de bug
   - `docs`: Documentação
   - `style`: Formatação (sem mudança de lógica)
   - `refactor`: Refatoração de código
   - `test`: Testes
   - `chore`: Manutenção
   - `perf`: Performance

   **Formato do commit:**
   ```
   <tipo>(<escopo>): <descrição curta>
   ```

3. **Apresente ao usuário:**
   - Resumo das mudanças encontradas
   - Sugestão de mensagem de commit
   - Pergunte se deseja fazer o commit ou ajustar a mensagem

4. **Se for criar PR:**
   - Use o template com: Descrição, Tipo de Mudança, Como Testar, Checklist
   - Analise todos os commits da branch para gerar descrição completa

## Exemplo de uso

```
/git-helper
```

Saída esperada:
```
📊 Estado do repositório:
- 2 arquivos modificados
- 1 arquivo novo

📝 Sugestão de commit:
feat(sections): adiciona seções Portfolio e Services

Deseja fazer o commit com esta mensagem?
```
