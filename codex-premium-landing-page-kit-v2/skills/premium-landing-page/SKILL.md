---
name: premium-landing-page
description: Planejar, criar, revisar ou refinar landing pages React sob medida com direção de arte forte, conteúdo verdadeiro, conversão, responsividade, acessibilidade, SEO, performance e QA visual. Use em projetos de landing pages de clientes; não use para copiar templates ou inventar conteúdo ausente.
---

# Premium Landing Page

Produza uma página reconhecível como trabalho específico para a marca, não como combinação genérica de tendências. O resultado exige decisão visual, implementação sólida e inspeção da página real.

## Fontes do projeto

Leia primeiro:

- `AGENTS.md` para invariantes do projeto;
- `CLIENT-BRIEF.md` para fatos, materiais, escopo e pendências;
- arquivos e assets existentes antes de escolher arquitetura ou estética.

Mantenha uma separação explícita entre **confirmado**, **hipótese** e **pendente**. Nunca transforme uma lacuna em fato. Se faltar conteúdo que bloqueie publicação, avance com estrutura/estilo quando seguro e sinalize o bloqueio.

## Workflow com gates

### 1. Descoberta

Determine objetivo, CTA, público, objeções, contexto local, conteúdo disponível e restrições. Analise identidade real do cliente: marca, voz, fotografia, ambiente, materiais e presença digital. Pesquise externamente somente quando permitido e útil; fatos externos precisam ser verificados.

### 2. Duas direções antes do código

Preencha `DESIGN-DIRECTIONS.md` com duas direções genuinamente diferentes em conceito, composição, tipografia, imagem e ritmo. Ambas precisam servir à marca e à conversão.

Não implemente antes de uma escolha, salvo autorização clara para escolher. Nesse caso, recomende, justifique e registre a decisão.

Para critérios detalhados de direção de arte, tipografia, fotografia, composição, motion e de-AI, leia [references/art-direction-and-de-ai.md](references/art-direction-and-de-ai.md).

### 3. Sistema e narrativa

Defina tokens e regras antes de criar muitas seções: escala tipográfica, largura de leitura, espaços, cores, bordas, raios, sombras, grid e motion. Planeje a página como sequência de decisões do visitante. Inclua somente seções com função clara.

### 4. Implementação

Trabalhe com React + TypeScript + Vite + Tailwind e respeite as versões existentes. Use HTML semântico e componentes coesos. Use Lucide; Motion é opcional e deve justificar seu custo. CTA simples de WhatsApp usa `wa.me`, sem backend.

Implemente mobile-first, mas trate desktop como composição própria. Garanta conteúdo robusto a textos longos, telas estreitas, zoom e ausência de hover.

O 21st.dev pode ajudar em uma necessidade pontual. Pesquise por intenção, compare referências e adapte ao sistema local. Nunca faça montagem indiscriminada de componentes.

### 5. Crítica visual obrigatória

Rode a interface e inspecione screenshots reais em mobile e desktop. Avalie hierarquia, ritmo, fotografia, alinhamento, densidade, coerência, conversão e especificidade de marca. Preencha `VISUAL-QA-CHECKLIST.md`.

Faça uma segunda passada perceptível. Ajuste decisões visuais e de conteúdo; não conte apenas lint ou correções de build como refinamento.

### 6. QA e lançamento

Valide tipos, lint, testes, build, console, links, teclado, foco, contraste, headings, reduced motion, metadados, structured data, imagens, fontes, CLS e terceiros. Use Playwright quando houver configuração ou fluxos que mereçam smoke/regressão. Automação não substitui inspeção manual.

Para procedimentos técnicos e Playwright, leia [references/engineering-and-qa.md](references/engineering-and-qa.md). Para SEO local, conteúdo e conversão, leia [references/seo-local-and-conversion.md](references/seo-local-and-conversion.md).

Complete `PRE-LAUNCH-CHECKLIST.md`; depois da publicação, use `POST-LAUNCH-CHECKLIST.md`.

## Saída esperada

Ao concluir, reporte de forma verificável:

- direção escolhida e decisões que a tornam específica;
- estrutura e principais implementações;
- mudanças da segunda passada;
- comandos/checks executados e resultados;
- screenshots/viewports inspecionados;
- pendências, limitações e dados que ainda exigem confirmação.

Não declare “pronto” se a página não foi aberta e inspecionada ou se dados essenciais continuam provisórios.
