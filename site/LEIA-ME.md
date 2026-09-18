# Silhueta — site

Site estático (HTML, CSS, JS). Não precisa de build: publicar a pasta `site/` tal como está.

## Pré-visualizar

As fontes são locais e o browser bloqueia-as se o `index.html` for aberto por duplo clique (`file://`). Use um servidor local:

```
npx http-server site -p 8080
```

ou a extensão "Live Server" do VS Code. Depois abra http://localhost:8080.


## Onde editar

| O quê | Onde |
|---|---|
| Textos | `index.html` (secções numeradas 01–11) |
| Cores, tipografia, espaçamentos | `css/styles.css`, bloco `:root` |
| Foto do hero | `assets/img/fotos/` — substituir mantendo o nome e a proporção (fontes em `CREDITOS.txt`) |
| Fotos dos serviços | `assets/img/servicos/` — uma por serviço, 4:3 (640×480) |
| Envio do formulário | `js/main.js`, função `sendQuote()` (ainda não ligada) |
| Confiança (secção 09) | Versão de demonstração: fotos ilustrativas em `assets/img/galeria/`, testemunhos de exemplo e espaço para a foto da Susana. Substituir por material real e retirar os selos `.demo-badge` |

## Pendentes

- Domínio: adicionar `<link rel="canonical">` e `og:url`.
- Zonas atendidas (secção 08), se a cliente as confirmar.
- Livro de Reclamações Eletrónico e política de privacidade, se aplicável.
- Destino do formulário.
