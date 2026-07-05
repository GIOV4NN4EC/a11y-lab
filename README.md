# A11y Lab

Ambiente estático de testes manuais para critérios WCAG 2.x:

- **1.1.1** — Conteúdo Não Textual
- **1.3.1** — Informações e Relações
- **2.4.6** — Cabeçalhos e Rótulos

## Hospedagem

Site 100% estático (HTML + CSS). Não há build nem dependências.

### GitHub Pages

1. Envie o repositório para o GitHub.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**.
3. Faça push na branch `main` ou `master` — o workflow `.github/workflows/deploy.yml` publica automaticamente.

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
index.html                      # Página inicial
1.1.1-non-text-content.html     # Critério 1.1.1
1.3.1-info-relationships.html # Critério 1.3.1
2.4.6-headings-labels.html      # Critério 2.4.6
styles.css
404.html
```
