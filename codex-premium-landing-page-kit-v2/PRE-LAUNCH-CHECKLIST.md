# Checklist de pré-lançamento

## Conteúdo e conversão

- [ ] Todo conteúdo foi aprovado e está livre de placeholders — demonstração ainda usa imagens provisórias e avaliações pendentes
- [x] CTA primário funciona e tem destino correto
- [ ] Mensagem e número do WhatsApp foram testados em dispositivo real
- [ ] Telefone, e-mail, redes, mapa e horários estão corretos
- [ ] Reviews, números e claims têm fonte/autorização
- [x] Não existe urgência, escassez ou prova social falsa

## Responsividade e navegador

- [x] 320 px
- [x] 375/390 px
- [x] 768 px
- [x] 1024 px
- [x] 1440 px ou maior
- [ ] Alturas curtas e orientação paisagem
- [x] Conteúdo longo sem overflow ou sobreposição
- [ ] Chrome/Chromium e pelo menos outro navegador relevante — Chrome validado; segundo navegador pendente
- [ ] Dispositivo móvel real quando disponível

## Acessibilidade

- [ ] Navegação completa por teclado
- [x] Foco visível e ordem lógica
- [x] Landmarks e headings coerentes; apenas um H1
- [x] Imagens informativas têm alt; decorativas são ignoradas
- [x] Contraste e estados não dependem só de cor
- [ ] Zoom de 200% não perde conteúdo ou função
- [x] Movimento reduzido respeitado
- [ ] Auditoria automatizada sem erros críticos e revisão manual feita

## SEO/local/social

- [x] `lang`, title e meta description corretos
- [ ] Canonical aponta para a URL do preview Netlify; confirmar domínio próprio com Lucas antes da publicação final
- [ ] Open Graph e imagem social testados — implementados, teste em URL pública pendente
- [x] Favicon e manifest/ícones quando aplicável
- [x] `robots.txt` não bloqueia produção
- [x] `sitemap.xml` contém somente URLs canônicas de produção
- [x] Dados estruturados idênticos ao conteúdo visível, com horários e telefone agora confirmados
- [x] NAP/localidade consistentes para Serra, Cruzeiro e Rua do Ouro
- [ ] Página 404/rotas e redirects verificados quando aplicável

## Performance

- [ ] Imagens têm dimensões, formatos e `srcset`/sizes adequados — dimensões reservadas; fotografias provisórias ainda em JPEG
- [x] Hero/LCP não usa lazy-load indevido
- [x] Conteúdo abaixo da dobra usa lazy-load quando apropriado
- [x] Fontes e pesos foram reduzidos e têm fallback
- [x] Não há CLS evidente nas capturas desktop/mobile
- [x] Dependências e scripts de terceiros foram justificados
- [x] Build de produção executada; auditoria Lighthouse em URL pública pendente

## Segurança e privacidade

- [x] Nenhum segredo ou token está no cliente/repositório
- [x] Links `target="_blank"` estão protegidos
- [x] Não há injeção de HTML/conteúdo não confiável
- [ ] Formulários têm validação, feedback e proteção apropriada
- [ ] Dados coletados e retenção foram minimizados
- [ ] Analytics/pixels respeitam consentimento aplicável
- [x] Dependências sem alertas críticos conhecidos

## Engenharia e QA

- [x] Typecheck
- [x] Lint
- [ ] Testes existentes
- [x] Build de produção
- [x] Console sem erros
- [x] Links e âncoras verificados; BestBarbers respondeu corretamente
- [x] Playwright/smoke tests quando configurados ou justificados
- [x] Screenshot QA e segunda passada concluídos
- [x] Pendências/limitações documentadas
