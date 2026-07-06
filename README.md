# A11y Lab

Ambiente estático de testes manuais para critérios WCAG 2.x:

- **1.1.1** — Conteúdo Não Textual
- **1.3.1** — Informações e Relações
- **2.4.6** — Cabeçalhos e Rótulos

## Portal simulado — UFAL

Réplica educacional inspirada no site [ufal.br](https://ufal.br/), com problemas de acessibilidade embutidos para prática de auditoria:

| Página | Caminho |
|--------|---------|
| Página inicial | `ufal/index.html` |
| Concursos e Editais | `ufal/editais.html` |
| Gabarito | `ufal/guia-auditor.html` |

Seções reproduzidas: destaques, notícias, vídeos, cursos, editais e agenda/calendário.

## Plataforma simulada — CursoVivo

Cenário alternativo (cursos corporativos) com fluxo completo:

| Página | Caminho |
|--------|---------|
| Landing + login | `platform/index.html` |
| Dashboard | `platform/app/dashboard.html` |
| Catálogo | `platform/app/cursos.html` |
| Detalhe do curso | `platform/app/curso-detalhe.html` |
| Relatórios | `platform/app/relatorios.html` |
| Configurações | `platform/app/configuracoes.html` |
| Gabarito | `platform/guia-auditor.html` |

## Hospedagem

Site 100% estático (HTML + CSS). Não há build nem dependências.

### GitHub Pages

1. Envie o repositório para o GitHub.
2. **Obrigatório:** em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** (não "Deploy from a branch").
3. Faça push na branch `main` — o workflow `.github/workflows/deploy.yml` publica automaticamente.
4. Se falhar com "Deployment failed, try again later", confira o passo 2 e rode o workflow manualmente em **Actions → Deploy GitHub Pages → Run workflow** (não use "Re-run" em jobs antigos).

URL após o deploy: `https://SEU_USUARIO.github.io/a11y-lab/`

### Netlify

1. Conecte o repositório em [netlify.com](https://www.netlify.com/).
2. Build command: *(vazio)*
3. Publish directory: `.`
4. O arquivo `netlify.toml` já define a publicação.

### Vercel

1. Importe o repositório em [vercel.com](https://vercel.com/).
2. Framework preset: **Other** (sem build).
3. Output directory: `.`

### Qualquer servidor estático

```bash
npx --yes serve .
# ou
python3 -m http.server 8080
```

## Estrutura

```
index.html                        # Hub do laboratório
ufal/                             # Portal simulado UFAL (ufal.br)
  index.html                      # Página inicial
  editais.html                    # Concursos e editais + filtro
  guia-auditor.html               # Gabarito para auditores
  css/ufal.css
  js/ufal.js
platform/                         # Plataforma simulada CursoVivo
  index.html                      # Landing + login
  guia-auditor.html               # Gabarito para auditores
  app/dashboard.html              # Painel administrativo
  app/cursos.html                 # Catálogo
  app/curso-detalhe.html          # Página de curso
  app/relatorios.html             # Analytics
  app/configuracoes.html          # Perfil e notificações
1.1.1-non-text-content.html       # Laboratório isolado
1.3.1-info-relationships.html
2.4.6-headings-labels.html
styles.css
404.html
```
