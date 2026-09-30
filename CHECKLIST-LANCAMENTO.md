# Silhueta — Checklist até ao lançamento

Marcar `[x]` à medida que for feito. Ordem = prioridade.

---

## 1. Decisões com a cliente

- [ ] Escolher a versão: **azul** (`site/`) ou **roxa** (`site-roxo/`) — a outra deixa de ser mantida
- [ ] Confirmar se faz **manutenção de espaços** (se sim: que serviços?)
- [ ] Confirmar as **zonas atendidas** (Cascais, Estoril, Parede, Carcavelos…?) → dobra "Cascais"
- [ ] Confirmar a **promoção do popup de saída**: valor, condições, validade — ou retirar o popup
- [ ] A Susana aceita aparecer com **foto e nome** no site?
- [ ] Horário de atendimento (para o Google e o rodapé)
- [ ] Tem loja/morada física onde recebe clientes? (define o tipo de perfil no Google)
- [ ] Nome legal / NIF (rodapé e política de privacidade)

## 2. Material a pedir à cliente

- [ ] **Fotos reais** de trabalhos (6+): roupa tratada, casas/AL limpos, antes/depois, equipa a trabalhar
- [ ] **2–3 testemunhos** reais (nome, tipo de cliente, serviço) + autorização para publicar
- [ ] Link do **perfil Google** e nota das avaliações (se existir)
- [ ] **Foto da Susana** + uma frase curta dela, na primeira pessoa
- [ ] Logótipo final em alta resolução (idealmente SVG) na versão escolhida
- [ ] Redes sociais (Instagram/Facebook), se quiser que apareçam

## 3. Site — substituir conteúdo de demonstração

- [ ] Trocar fotos de banco pelas reais (mesmos nomes de ficheiro — ver `CREDITOS.txt`)
- [ ] Dobra **Confiança**: pôr testemunhos, galeria e foto da Susana reais; **retirar todos os selos "Exemplo"**
- [ ] Popup de saída: valor real em `.promo-value` e retirar o selo — ou apagar o `#promo-modal`
- [ ] Dobra **Cascais**: acrescentar as zonas atendidas
- [ ] Rever toda a copy com a cliente (sobretudo: "Orçamento antes de começar", "Pequenos arranjos" na costura)

## 4. Funcionamento

- [ ] **Ligar o formulário** (`sendQuote()` em `js/main.js`) — ex.: Formspree ou Netlify Forms, envio para o e-mail da Susana
- [ ] Testar o envio real (formulário da página **e** do popup) e confirmar que chega
- [ ] Testar no telemóvel real: carrosséis a deslizar, WhatsApp abre com mensagem, chamada telefónica
- [ ] Testar em iPhone (Safari) e Android (Chrome)

## 5. Legal (Portugal)

- [ ] **Política de privacidade** (RGPD) — o formulário recolhe dados pessoais; link no rodapé e junto ao botão do formulário
- [ ] **Livro de Reclamações Eletrónico** — link/ícone no rodapé (obrigatório para a maioria dos prestadores de serviços ao consumidor; confirmar com a cliente/contabilista)
- [ ] Banner de cookies **só se** forem adicionados analytics ou pixels de terceiros

## 6. Domínio, alojamento e e-mail

- [ ] Registar o domínio `.pt` (ex.: `silhueta.pt` ou `silhuetacascais.pt`) — **em nome da cliente**
- [ ] Publicar a pasta escolhida (Netlify / Vercel / Cloudflare Pages — plano gratuito chega)
- [ ] Ligar o domínio ao alojamento + HTTPS ativo
- [ ] (Opcional) E-mail profissional `geral@dominio.pt` em vez do hotmail

## 7. SEO

**No site (técnico)**
- [ ] Adicionar `<link rel="canonical">` e `og:url` com o domínio final
- [ ] Atualizar o JSON-LD: `url`, morada/zona, horário (`openingHours`), link do perfil Google (`sameAs`)
- [ ] Criar `robots.txt` e `sitemap.xml`
- [ ] Imagem de partilha (`og:image`) própria: 1200×630 com logótipo + foto
- [ ] Trocar os `alt` das fotos quando forem reais (descrever o trabalho real, com "Cascais" quando fizer sentido)
- [ ] Correr o Lighthouse no domínio final (meta: ≥ 90 / 100 / 100 / 100)

**Google e presença local (o que mais pesa para "lavandaria Cascais")**
- [ ] Criar/otimizar o **Perfil de Empresa no Google** (Google Business Profile): categorias (lavandaria, serviço de limpeza), zona de atendimento, horário, fotos, link do site, WhatsApp
- [ ] Pedir **avaliações no Google** aos clientes atuais (link direto de avaliação)
- [ ] **Google Search Console**: verificar o domínio e submeter o `sitemap.xml`
- [ ] **Bing Webmaster Tools** + Bing Places (5 minutos, importa do Google)
- [ ] Nome, telefone e zona **iguais** em todo o lado (site, Google, redes, diretórios)
- [ ] Registar em diretórios locais relevantes (ex.: Páginas Amarelas, diretórios de Cascais)

**Depois do lançamento (1–3 meses)**
- [ ] Ver no Search Console as pesquisas que trazem visitas e ajustar títulos/textos
- [ ] Considerar páginas próprias para os serviços mais procurados (ex.: "Limpeza de Alojamento Local em Cascais")
- [ ] Publicar fotos novas no Perfil Google regularmente

## 8. Medir resultados (opcional)

- [ ] Analytics sem cookies (ex.: Plausible, Cloudflare Web Analytics) para evitar banner
- [ ] Contar cliques no WhatsApp e envios do formulário

## 9. Fecho

- [ ] Apagar a versão de cor não escolhida e os ficheiros de demonstração não usados
- [ ] Commit final + entregar à cliente: acessos (domínio, alojamento, Google), instruções básicas de edição
