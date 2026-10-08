# Prompt de início

Use a skill local `premium-landing-page` e siga `AGENTS.md`.

Leia `CLIENT-BRIEF.md` e audite os assets disponíveis. Não invente dados, reviews, serviços, certificações, números, resultados ou claims. Liste lacunas que realmente bloqueiam o trabalho e avance com segurança nas demais partes.

Antes de implementar, preencha `DESIGN-DIRECTIONS.md` com duas direções visuais realmente distintas, ambas baseadas na identidade real do cliente. Explique composição, tipografia, fotografia, cor, gesto visual, motion e adaptação mobile. Não diferencie as opções apenas por paleta. Se eu ainda não tiver escolhido uma, recomende a mais forte e aguarde aprovação antes de codificar; se eu tiver autorizado você a decidir, registre a escolha e prossiga.

Depois, implemente em React + TypeScript + Vite + Tailwind. Use Lucide para ícones e Motion somente quando houver propósito claro. Para um CTA simples de WhatsApp, use `wa.me` e não crie backend. Use 21st.dev apenas para pesquisar padrões ou componentes específicos; adapte tudo ao sistema visual e não monte uma colagem de templates.

Abra a página funcionando, faça QA visual em desktop e mobile, preencha `VISUAL-QA-CHECKLIST.md`, execute uma segunda passada de refinamento perceptível e então valide responsividade, acessibilidade, SEO técnico/local, performance, conversão, segurança, links e build. Use Playwright quando já estiver configurado ou quando automatizar fluxos/smoke tests trouxer valor real. Atualize `PRE-LAUNCH-CHECKLIST.md` com evidências e informe qualquer item não verificado.
