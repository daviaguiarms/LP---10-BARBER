# Engenharia e QA

Leia este arquivo durante implementação, crítica técnica e pré-lançamento.

## Implementação robusta

- Descubra versões, scripts e convenções do repositório antes de editar.
- Use TypeScript estrito conforme o projeto; modele dados repetidos em estruturas tipadas.
- Separe conteúdo de apresentação quando facilitar revisão pelo cliente.
- Use elementos nativos antes de componentes customizados.
- Defina estados de interação completos: hover, focus-visible, active, disabled, loading, success e error quando aplicáveis.
- Links e botões precisam representar a ação correta.
- Componentes de mídia devem declarar proporção/dimensões e comportamento responsivo.

## Responsividade

Teste 320, 375/390, 768, 1024 e 1440+ px, além de uma altura curta. Verifique:

- overflow horizontal e clipping;
- menu e âncoras;
- quebras de título e largura de leitura;
- áreas de toque;
- ordem de leitura;
- recorte de imagem;
- elementos sticky/fixed;
- textos reais longos;
- zoom de 200%.

## Acessibilidade manual

- Percorra tudo com teclado, inclusive menu, accordion, carousel e formulário.
- Confirme foco visível e ausência de armadilhas.
- Revise heading outline e landmarks.
- Confirme nomes acessíveis e mensagens de erro associadas.
- Verifique contraste inclusive em hover/focus/disabled.
- Teste redução de movimento e conteúdo sem depender de animação.
- Use auditoria automatizada como apoio, não como aprovação total.

## Performance

- Identifique o candidato a LCP e carregue-o de forma apropriada.
- Use formatos modernos e imagens responsivas; evite servir arquivo enorme ao mobile.
- Reserve dimensões e evite fontes/efeitos que causem CLS.
- Subset/preload de fontes somente quando medido e apropriado.
- Lazy-load abaixo da dobra, nunca indiscriminadamente.
- Motion ligado ao scroll deve evitar listeners pesados e layout thrashing.
- Remova dependências e terceiros sem valor mensurável.

## Segurança e privacidade

- Nenhum segredo pertence a variáveis expostas ao Vite ou ao bundle.
- Evite `dangerouslySetInnerHTML`; sanitize conteúdo não confiável se for inevitável.
- Valide URLs e entradas; formulários públicos precisam de proteção no serviço receptor.
- Não colete dados sem necessidade nem instale trackers sem aprovação.
- Use contas do cliente ou transfira propriedade de domínio, deploy e analytics.

## Playwright quando fizer sentido

Use testes E2E/smoke quando o projeto já possui Playwright, quando há menu/modal/formulário/rotas, ou quando a repetibilidade justifica a configuração. Não instale apenas para satisfazer um checklist em uma página trivial sem interações.

Cobertura útil:

- página carrega sem erro de console;
- navegação e menu mobile;
- CTA principal tem URL/destino correto;
- links de âncora;
- formulário e mensagens, se houver;
- ausência de overflow em viewports-chave;
- screenshots de desktop e mobile para inspeção;
- reduced-motion quando motion existe.

Prefira seletores por papel/nome acessível. Não faça testes frágeis baseados em classes Tailwind ou texto ornamental. Screenshot test detecta diferença; ainda exige julgamento visual.

## Ordem de validação

1. Typecheck e lint.
2. Testes unitários/integração existentes.
3. Build de produção.
4. Rodar a build ou preview real.
5. Smoke/Playwright quando aplicável.
6. Auditorias de acessibilidade/performance.
7. Inspeção visual e segunda passada.

Registre comandos, resultados e itens não executados. Não esconda warnings relevantes.
