# Regras do projeto — Landing Page Premium

Estas regras valem para todo o projeto. Leia também `CLIENT-BRIEF.md` e use a skill local `premium-landing-page` antes de planejar ou implementar.

## Princípios inegociáveis

- Crie para a marca real deste cliente; não apenas para o segmento.
- Nunca invente nomes, biografias, serviços, preços, números, resultados, reviews, certificações, prêmios, parceiros, endereços, horários, políticas, fotos de antes/depois ou claims.
- Diferencie fatos confirmados, hipóteses e pendências. Use placeholders explicitamente marcados apenas em ambiente de rascunho; eles não podem chegar à publicação.
- Preserve o conteúdo e as mudanças existentes do cliente. Não substitua arquivos ou configurações sem necessidade.
- Não copie concorrentes, referências ou templates. Extraia princípios e crie uma solução própria.
- Não trate a primeira versão como final. Crítica visual e segunda passada de refinamento são obrigatórias.

## Stack e arquitetura

- Alvo: React + TypeScript + Vite + Tailwind.
- Use Lucide para ícones de interface. Não use emoji como ícone de UI.
- Use Motion somente quando houver propósito claro. Respeite `prefers-reduced-motion`.
- Para CTA simples de WhatsApp, use link `https://wa.me/<numero>` com mensagem pré-preenchida quando aprovada. Não crie backend.
- Adicione dependências apenas quando o ganho superar custo de bundle, manutenção e risco.
- Siga a configuração e a versão de Tailwind já presentes; não assuma sintaxe de outra versão.
- Prefira HTML semântico, componentes focados e conteúdo/data separado quando isso facilitar manutenção.
- Evite abstrações prematuras, componentes microscópicos e um único `App.tsx` monolítico.
- Não use `any`, casts ou supressões para esconder erros.

## Processo obrigatório

1. Audite os materiais e registre lacunas do briefing.
2. Analise a identidade real: logo, formas, paleta, voz, fotografia, presença digital, ambiente físico e público.
3. Defina objetivo, audiência, jornada e CTA primário.
4. Proponha **duas direções visuais distintas** em `DESIGN-DIRECTIONS.md` antes de programar.
5. Escolha uma direção e defina tokens, tipografia, ritmo, grade, fotografia, motion e padrões de componente.
6. Planeje a narrativa e as seções pela função, não por uma lista fixa de template.
7. Implemente mobile-first, sem perder ambição visual no desktop.
8. Rode a página e capture/inspecione desktop e mobile.
9. Faça uma crítica visual honesta e registre problemas no `VISUAL-QA-CHECKLIST.md`.
10. Execute uma segunda passada de refinamento perceptível.
11. Valide build, tipos, lint, fluxos, acessibilidade, SEO, performance, links e conteúdo.
12. Conclua os checklists de pré e pós-lançamento.

Não pule a etapa de duas direções para “ganhar tempo”, salvo se o cliente já tiver uma direção aprovada e documentada. Nesse caso, registre a decisão e explore duas interpretações de composição dentro dela.

## Direção visual

- Construa um ponto de vista em uma frase, por exemplo: “precisão clínica com calor humano” ou “barbearia urbana com rigor editorial”.
- Use poucos gestos visuais memoráveis e repita-os com consistência.
- Prefira hierarquia, escala, ritmo, recorte fotográfico e contraste a ornamentos gratuitos.
- Fotografia real e boa direção de imagem têm prioridade sobre ilustrações genéricas ou imagens artificiais.
- Tipografia deve refletir a personalidade da marca, suportar português e manter legibilidade. Limite famílias e pesos.
- Composição editorial pode usar assimetria, sobreposição controlada, recortes, áreas de respiro e alternância de densidade sem prejudicar leitura ou mobile.
- Não use a mesma solução de hero, cards e gradiente em todos os clientes.

## Anti-AI / de-AI

Evite por padrão:

- gradiente roxo/azul, glow e glassmorphism sem relação com a marca;
- `rounded-3xl` e sombras em todos os blocos;
- grade de três cards iguais como resposta automática a qualquer conteúdo;
- badge acima de todo título, ícones decorativos aleatórios e pill buttons em excesso;
- seções inteiras centralizadas, largura e espaçamento uniformes demais;
- headline vaga como “Transforme seu negócio” ou “Eleve sua experiência”;
- números, avaliações e logos de clientes falsos;
- animações em todo elemento, parallax forte ou scroll hijacking;
- texto genérico que poderia servir para qualquer concorrente;
- mistura de componentes 21st.dev com linguagens visuais incompatíveis.

Depois da primeira versão, pergunte: “Que decisões só poderiam existir para este cliente?” Se a resposta for fraca, redesenhe os trechos genéricos.

## Conteúdo e conversão

- Um CTA primário deve dominar; ações secundárias não podem competir com ele.
- Escreva ou edite a copy somente a partir de fatos confirmados e do tom da marca.
- Explique valor antes de pedir ação. Reduza ansiedade perto do CTA com informação verdadeira.
- Não use dark patterns, urgência falsa, contadores falsos ou consentimento pré-marcado.
- Depoimentos só entram com texto, autoria e autorização confirmados.
- Resultados e antes/depois exigem material verdadeiro, consentimento e contexto adequado ao setor.

## Responsividade e estabilidade

- Verifique ao menos 320, 375/390, 768, 1024 e 1440 px; inclua alturas curtas e conteúdo longo.
- Nada pode depender de hover. Áreas de toque devem ser confortáveis.
- Evite overflow horizontal, saltos de layout, texto órfão evidente, CTAs quebrados e mídia com proporção errada.
- Componentes devem resistir a nomes, títulos e textos maiores que o exemplo inicial.
- Garanta navegação e ordem de leitura coerentes quando a composição muda entre desktop e mobile.

## Acessibilidade

- Use landmarks, heading hierarchy, labels, nomes acessíveis e alt text contextual.
- Todos os controles devem funcionar por teclado e ter foco visível.
- Não use cor como único indicador. Verifique contraste, estados e mensagens de erro.
- Respeite zoom, tamanhos legíveis e redução de movimento.
- ARIA complementa HTML semântico; não substitui.

## SEO, local e compartilhamento

- Um H1 descritivo, title e description únicos, canonical quando aplicável e idioma correto.
- Open Graph/social image, favicon, robots e sitemap coerentes com o ambiente.
- Para negócio local, use nome, endereço, telefone, cidade, horário e área atendida somente quando confirmados e consistentes.
- Dados estruturados devem corresponder ao conteúdo visível e usar o tipo correto. Não fabrique `aggregateRating`.
- Não prometa ranking. SEO técnico cria uma boa base; não garante posição.

## Performance e segurança

- Otimize dimensões, formato e carregamento das imagens; preserve a imagem principal sem lazy-load inadequado.
- Minimize fontes, pesos, JavaScript, bibliotecas e terceiros. Evite CLS e trabalho pesado no scroll.
- Links externos abertos em nova aba devem usar proteção apropriada.
- Não exponha segredos, tokens, dados pessoais ou chaves no frontend/repositório.
- Colete o mínimo de dados. Formulários e analytics exigem tratamento compatível com privacidade e consentimento aplicável.
- Não injete HTML não confiável. Mantenha dependências e deploy sem alertas críticos conhecidos.

## Definição de pronto

Só declare concluído quando houver evidência: build/testes executados, screenshots inspecionados, segunda passada realizada e checklists atualizados. Informe com clareza qualquer limitação, dado pendente ou teste não executado.
