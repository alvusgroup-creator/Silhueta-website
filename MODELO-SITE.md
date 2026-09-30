# Modelo de landing page — padrão ALVUS

> Colocar este ficheiro na raiz de cada novo projeto de site e preencher a secção 1.
> O Claude deve ler este documento **antes** de desenhar ou escrever código e seguir a direção abaixo
> em vez de propor um estilo próprio. Aprovado a partir do projeto Silhueta (lavandaria e limpeza, Cascais).

---

## 1. Dados do cliente (preencher)

| Campo | Valor |
|---|---|
| Marca | |
| Setor / serviços (lista exata, sem inventar) | |
| Cidade / zona | |
| Público | |
| Objetivo principal (ex.: WhatsApp, orçamento, marcações) | |
| CTA principal / secundário | Pedir orçamento / Falar no WhatsApp |
| Telefone / WhatsApp / E-mail | |
| Responsável (nome, se pode aparecer) | |
| Cor principal / cor de destaque (do logótipo) | |
| Logótipo horizontal + versão ícone | caminho dos ficheiros |
| Idioma e variante (PT-PT / PT-BR) | |
| Provas reais disponíveis (testemunhos, avaliações, fotos, números) | |
| Promoções reais (valor, condições) | |
| Referências visuais (prints) | |

---

## 2. Direção visual (o que o cliente/agência gosta)

**Sensação:** moderno, fresco, amigável e premium — cantos arredondados, muito branco, pílulas, fotos luminosas com pessoas reais, detalhes animados subtis. **Não** editorial/minimalista seco (listas com linhas finas, texto corrido, palavra gigante decorativa) — isso foi rejeitado por parecer genérico/vazio.

**Tipografia:** Poppins 600 nos títulos + Inter 400–600 no texto (self-hosted, subconjunto latino). Sem serifas. Títulos grandes com `line-height` ~1.1–1.18.

**Cor:** 1 cor escura de estrutura (hero, CTA escuros), 1 cor de marca para botões (verificar contraste AA com branco ≥ 4.5:1), 1 tom muito claro para fundos suaves e pílulas, fundo geral quase branco. Sempre derivar do logótipo. Se o logótipo tiver variantes de cor, preparar a outra versão como cópia (`site-<cor>/`).

**Componentes-assinatura:**
- **Pílula (eyebrow)** acima de cada título de secção (fundo claro, texto escuro, pequena).
- **Cabeçalho de secção centrado:** pílula → H2 (largo, idealmente 1 linha no desktop) → parágrafo curto (1–2 linhas, largura ~44rem) → conteúdo.
- **Traço curvo animado** por baixo de 1 expressão-chave em alguns títulos (desenha-se ao entrar; nunca numa expressão que quebre linha).
- **Cards** com raio 20–24px, sombra suave, foto em cada card.
- **Hover "gelatinoso"** subtil em botões, tabs, ícones e cards (cards: gelatina + zoom ~2.5%).
- **Entrada suave** (fade + subida) em todas as dobras, com escalonamento em listas/grelhas.
- **Bolhas/espuma** decorativas quando o setor é limpeza/água: borda de espuma no fim do hero, bolhas a flutuar; bolhas aleatórias nas **margens laterais vazias** só em ecrãs ≥ 1600px. **Nunca** por cima de texto ou botões.

---

## 3. Estrutura-padrão das dobras

1. **Header** transparente sobre o hero (logótipo branco), fica sólido ao descer (logótipo a cores). Menu + botão "Pedir orçamento".
2. **Hero:** foto de fundo a toda a largura (pessoa a trabalhar, luminosa), véu da cor escura à esquerda, texto à esquerda: pílula (cidade • área) → H1 → subtítulo → 2 CTAs → telefone. Telemóvel: foto em cima, texto **centrado** por baixo, subtítulo curto (≤ 3 linhas).
3. **Faixa de benefícios** (cartão branco sobreposto à base do hero): 4 itens com ícone — só factos verdadeiros (nada de "+10 anos" ou "equipa verificada" sem prova).
4. **Sobre:** composição de imagens animada à esquerda (imagem grande com um canto muito arredondado + imagem pequena emoldurada + card de destaque com um facto real + bolha, a flutuar) e texto à direita (pílula, H2, parágrafo, lista com ✓, 2 CTAs). Telemóvel: imagens **antes** do texto.
5. **Serviços numa só dobra:** cabeçalho centrado + **tabs em pílula** por área + **carrossel de cards** (foto, nome, benefício de 1 linha, "Pedir orçamento" → WhatsApp com mensagem do serviço). Setas nas laterais, a meio da altura do card. Botão de orçamento da área centrado por baixo.
6. **Para quem (perfis):** fundo em gradiente claro, 4 cards (título, 2 pontos, etiqueta, foto, botão redondo com seta → WhatsApp com mensagem do perfil), 1 card destacado que segue o rato. Telemóvel: deslizar.
7. **Como funciona:** cabeçalho centrado, 3 passos com círculo de cor + ícone + número em bolinha, linhas de ligação que se desenham, CTAs centrados.
8. **Localização:** mapa estático a toda a largura (OpenStreetMap recolorido na paleta, com atribuição) + marcador + caixa branca com texto e "Confirmar a minha zona".
9. **Confiança:** galeria em mosaico + testemunhos + bloco "Fale com [responsável]" com foto. **Só com material real**; em demonstração, usar fotos de banco e textos-modelo com selo visível "Exemplo".
10. **CTA final + formulário:** fundo claro, H2 | divisória vertical | parágrafo; formulário **numa linha** (Nome · Telefone · Email · Serviço · botão); "Prefere falar já? WhatsApp ou telefone"; imagem decorativa a esbater à direita.
11. **Rodapé claro:** logótipo a cores + frase, colunas (Serviços · Empresa · Contacto · botão WhatsApp), ©. Telemóvel: tudo centrado. Sem newsletter/redes/links legais se não existirem.

**Conversão:** botão flutuante de WhatsApp (desktop) + barra fixa "Pedir orçamento | WhatsApp" (telemóvel), ambos só depois do hero e escondidos quando o formulário está visível. Todos os "Pedir orçamento" abrem **popup com formulário** (tem de caber sem scroll no telemóvel: campos compactos, telefone+email lado a lado). **Popup de saída** com promoção (1× por visita, não nos primeiros 6s) — valor só se o cliente confirmar; senão selo "Exemplo".

---

## 4. Regras que não se negociam

- **Não inventar:** números, anos de experiência, avaliações, testemunhos, certificações, preços, promoções, garantias, zonas atendidas, serviços. Faltando → espaço preparado + marcação visível "Exemplo"/"a confirmar" + nota no HTML.
- Copy curta, em benefícios, no idioma/variante do cliente. Nada de "os melhores", "qualidade garantida".
- **Imagens:** usar bancos gratuitos (Pexels; Openverse/CC0) sem perguntar; WebP, recortadas por uso, créditos em `CREDITOS.txt`; nomes de ficheiro estáveis para troca por fotos reais.
- Stack: HTML + CSS + JS estático, sem frameworks; fontes self-hosted; ícones Lucide inline (SVG sprite).
- Qualidade: sem scroll horizontal (360–2560px), contraste AA, foco visível, `prefers-reduced-motion`, Lighthouse ≥ 90 performance / 100 acessibilidade.
- Decoração nunca sobrepõe conteúdo; testar 1280px (portátil) e ≥ 1600px (monitor grande).

---

## 5. Forma de trabalhar

- Construir a página completa com esta estrutura logo na 1.ª versão; depois ajustar **dobra a dobra** com os prints de referência do cliente.
- Seguir a referência de perto no layout, adaptando só o que violaria as regras da secção 4.
- Verificar cada alteração com capturas (desktop 1440, portátil 1280, tablet 768, telemóvel 390) antes de responder.
- Commit/push só quando pedido.
