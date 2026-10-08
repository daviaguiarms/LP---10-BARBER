# Kit Premium de Landing Pages — V2

Template operacional do Davi para criar landing pages sob medida com **React + TypeScript + Vite + Tailwind**, com máxima qualidade visual e mínima aparência de site gerado por IA.

Este kit não é um tema pronto. Ele organiza pesquisa, direção de arte, implementação, crítica visual, refinamento, QA e lançamento. A página final deve nascer da identidade e do conteúdo reais de cada cliente.

## O que vem no kit

```text
AGENTS.md
CLIENT-BRIEF.md
DESIGN-DIRECTIONS.md
CONTENT-ASSET-CHECKLIST.md
VISUAL-QA-CHECKLIST.md
PRE-LAUNCH-CHECKLIST.md
POST-LAUNCH-CHECKLIST.md
START-PROMPT.md
skills/
  premium-landing-page/
    SKILL.md
    references/
      art-direction-and-de-ai.md
      engineering-and-qa.md
      seo-local-and-conversion.md
```

## Como usar em cada cliente

1. Duplique a pasta inteira para a pasta do novo cliente.
2. Preencha `CLIENT-BRIEF.md`. Anexe logo, fotos, textos, links, endereços e referências reais.
3. Se algum dado essencial estiver ausente, marque como pendente. **Nunca complete lacunas inventando informações.**
4. Abra a pasta do cliente no Codex.
5. Use o texto de `START-PROMPT.md`.
6. O agente deve pesquisar a marca, quando autorizado e possível, e preencher `DESIGN-DIRECTIONS.md` com duas propostas realmente diferentes.
7. Escolha/aprove uma direção antes da implementação. Se você já autorizou o agente a decidir, ele deve registrar a escolha e a justificativa.
8. Implemente a primeira versão.
9. Faça a crítica visual obrigatória em desktop e mobile, preencha `VISUAL-QA-CHECKLIST.md` e execute uma segunda passada de refinamento.
10. Rode os testes técnicos e conclua `PRE-LAUNCH-CHECKLIST.md`.
11. Depois da publicação, conclua `POST-LAUNCH-CHECKLIST.md`.

## Stack padrão

- React + TypeScript + Vite
- Tailwind CSS
- Lucide para ícones
- Motion somente quando o movimento melhorar narrativa, compreensão ou feedback
- Link `wa.me` para CTA simples de WhatsApp; sem backend ou API só para abrir uma conversa
- Playwright quando houver configuração existente, fluxos relevantes ou benefício real de regressão/QA

Não adicione bibliotecas por hábito. Verifique primeiro a versão e os padrões já existentes no projeto.

## Gates de qualidade

O trabalho não está pronto quando “o código compila”. Está pronto somente após estes gates:

1. **Verdade:** nenhum dado, serviço, review, certificação, número, endereço ou claim foi inventado.
2. **Direção:** duas direções visuais foram exploradas antes do código e uma foi escolhida conscientemente.
3. **Primeira implementação:** a página funciona e expressa a direção escolhida.
4. **Crítica visual:** screenshots reais foram avaliados em desktop e mobile.
5. **Refinamento:** houve uma segunda passada visível, não apenas correção de lint.
6. **QA:** responsividade, acessibilidade, SEO, performance, links e conversão foram verificados.
7. **Lançamento:** domínio, analytics/consentimento quando aplicável, indexação e propriedade das contas foram conferidos.

## Sobre 21st.dev

Use apenas como **pesquisa de padrões ou fonte pontual de componentes**. Pesquise por uma necessidade específica, compare opções e adapte qualquer trecho à direção visual, tokens, conteúdo e comportamento do projeto. Não componha a página colando um hero, cards, FAQ e footer de origens diferentes. Se o resultado ainda parecer um catálogo de componentes, redesenhe.

## Regra central

Uma landing premium não nasce de mais efeitos. Ela nasce de conteúdo verdadeiro, hierarquia forte, fotografia adequada, tipografia bem tratada, composição com intenção, bom ritmo, excelente mobile e refinamento depois de olhar a página funcionando.

## Aplicação da demonstração — 10 & Barber

```bash
npm install
npm run dev
```

Validação:

```bash
npm run lint
npm run build
npm run test:e2e
```

Direção aprovada: **Dez em Destaque**. As fotografias incluídas são referências provisórias e devem ser substituídas pelo acervo oficial antes da publicação. Consulte `IMAGE-CREDITS.md`.

## Publicar no GitHub e Netlify

O projeto está configurado para deploy pelo Netlify (`netlify.toml`): comando `npm --script-shell=/bin/sh run build`, diretório publicado `dist` e Node.js 22. A raiz do repositório deve ser esta pasta do projeto. No Windows, `.npmrc` mantém o PowerShell para contornar o `&` no caminho local; o Netlify seleciona `/bin/sh` explicitamente, tanto na instalação (variável `NPM_CONFIG_SCRIPT_SHELL` no `netlify.toml`) quanto no build.

As variáveis `VITE_*` são configurações públicas incluídas no JavaScript do navegador; não coloque senhas ou tokens nelas. Os destinos de agendamento, Instagram e WhatsApp já têm valores de fallback. Sem domínio próprio, o build usa a URL do deploy/preview fornecida pelo Netlify (`DEPLOY_PRIME_URL`). Canonical, dados estruturados, sitemap e robots apontam para essa URL. Quando um domínio final for definido, configure `VITE_SITE_URL` nas variáveis de build do Netlify.

O arquivo `.env` serve apenas para desenvolvimento local e está no `.gitignore`. Para iniciar outro ambiente, copie `.env.example` para `.env`. Não envie o `.env` ao GitHub. Esta landing page não precisa de chaves secretas nem de backend.

Passos após criar o repositório:

1. Envie o conteúdo desta pasta para a raiz do repositório, incluindo `package-lock.json`, `.env.example` e `netlify.toml`.
2. No Netlify, importe esse repositório; mantenha o comando `npm run build` e a pasta `dist` (o arquivo `netlify.toml` já declara ambos).
3. Para compartilhar a versão de análise, use a URL `.netlify.app` exibida pelo Netlify. Antes da publicação final com domínio próprio, configure `VITE_SITE_URL` nas variáveis de build do Netlify.
4. Confira imagens oficiais, avaliações autorizadas, condições do plano e conteúdo pendente no `PRE-LAUNCH-CHECKLIST.md` antes de apresentar como site final.
