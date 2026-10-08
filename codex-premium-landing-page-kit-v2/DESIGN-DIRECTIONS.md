# Direções visuais — 10 & Barber

Documento de decisão anterior à implementação. As duas rotas partem da identidade observada no Instagram fornecido, mas desenvolvem experiências distintas. Nenhuma deve ser codificada antes da aprovação.

## Leitura da marca

### Evidências observadas na identidade real

- O logo coloca o numeral `10` em primeiro plano, em amarelo/dourado, com `BARBER` em branco e um bigode amarelo como assinatura.
- A base visual é preta/carvão, com amarelo intenso, dourado, branco e ocasionais tons de marrom/ferrugem.
- Os destaques usam círculos escuros, contorno grafite e ícones lineares brancos ou amarelos.
- Os posts misturam dois registros já existentes:
  - linguagem gráfica urbana: tipografia condensada pesada, letras enormes, recortes de fotografia, sobreposição e textura;
  - linguagem premium noturna: fotografia escura, dourado, serifada de alto contraste e composição mais silenciosa.
- A fotografia é quente, masculina e centrada em corte, barba, mãos, ferramentas e resultado.
- O contraste e a escala tipográfica são mais importantes que sombras, cantos arredondados ou efeitos digitais.
- A voz pública é direta: “O talento é 10!” e “Aqui o padrão é alto.”

### Conteúdo, público e jornada

- Público principal: homens jovens/adultos de Belo Horizonte, conectados ao Instagram e ao celular, que valorizam estilo, praticidade, ambiente e atendimento recorrente.
- Estado desejado: confiança, identificação e vontade de agendar — sem ostentação artificial.
- Jornada: conhecer a marca → entender a experiência → ver serviços → escolher unidade → agendar no BestBarbers.
- CTA primário: `AGENDAR HORÁRIO`.
- CTA secundário: `CONHECER UNIDADES`.
- Serviços confirmados: corte, barba e estética masculina.
- Unidades confirmadas para a demonstração: Serra e Cruzeiro. Rua do Ouro, 918 continua pendente.

### Paleta extraída como referência visual

Valores iniciais aproximados; devem ser conferidos quando o logo original chegar.

- Preto tinta — `#080909`
- Carvão — `#151719`
- Grafite — `#272A2E`
- Amarelo 10 — `#FFC400`
- Dourado — `#C7972B`
- Ferrugem — `#4A2920`
- Branco quente — `#F5F2EA`

### Convenções úteis e clichês a evitar

- Úteis: contraste alto, fotografia real, textura escura discreta, tipografia forte, recortes editoriais, linhas precisas e escolha de unidade muito clara.
- Evitar: poste de barbeiro decorativo, escudos inventados, couro/madeira cenográficos, tesouras como ícone repetido, preto + dourado “luxo” sem personalidade, grids de cards, neon, glow, glassmorphism e estética de dashboard.

### Restrições e pendências

- O print do Instagram é referência, não substitui os arquivos originais. Ainda faltam logo vetorial, paleta oficial, fotos em alta resolução e direitos de uso.
- Horários, terceira unidade, lista completa de serviços, profissionais, FAQ, links por unidade e dados dos planos precisam de confirmação.
- Nota e avaliações do BestBarbers só entram com textos, nomes, datas e autorização reais.
- A demonstração pode usar conteúdo substituível, mas não deve apresentar suposição como fato.

---

## Direção A — DEZ EM DESTAQUE

### Ideia central

**Transformar a linguagem gráfica do Instagram em uma experiência editorial de rua: grande, rápida, fotográfica e imediatamente reconhecível como 10 & Barber.**

Três atributos: **enérgica, urbana, proprietária**.

### Referências estéticas

- Pôsteres tipográficos e capas de revistas de cultura masculina.
- A colagem já usada pela marca nos posts de serviços: fotos recortadas, tipografia pesada e sobreposição controlada.
- Sinalização urbana e marcações de precisão, sem virar estética esportiva literal.
- O numeral 10 como elemento editorial, não como métrica inventada.

### Composição e grade

- Grade de 12 colunas no desktop, usada com assimetria, recortes e mudanças de escala.
- O `10` aparece parcialmente cortado nas bordas da viewport, servindo de moldura e ritmo.
- Blocos pretos e off-white alternam densidade; o amarelo identifica ação, foco e informação importante.
- Texturas de papel/carvão muito discretas derivam dos posts, sem prejudicar performance ou legibilidade.
- Poucos cantos arredondados; linhas retas e enquadramentos fotográficos fazem a estrutura.

```text
┌ NAV ─────────────────────────────────── CTA ┐
│ O TALENTO          [ FOTO FULL-BLEED         │
│ É 10.        10     DE CORTE / AMBIENTE ]    │
│ texto + ação                                  │
├──────────── faixa curta de posicionamento ───┤
│ NÃO É SÓ UM CORTE.   imagem + frases reais   │
├ SERVIÇOS ─────────────── imagem sticky ──────┤
│ CORTE / BARBA / ESTÉTICA                     │
├──────────── SERRA  ×  CRUZEIRO ──────────────┤
│ PLANO / GALERIA ASSIMÉTRICA / AVALIAÇÕES     │
└──────────────── CTA FINAL / FOOTER ──────────┘
```

### Tipografia

- Display: `Barlow Condensed` em peso 700, escolhida após a revisão visual por preservar a força urbana com formas menos agressivas e melhor respiro para acentos em português.
- Texto: `Archivo` para leitura objetiva.
- Utilitário: `IBM Plex Mono` em endereços, legendas e origem de avaliações.
- Títulos grandes em caixa alta; corpo em caixa normal para não tornar a voz agressiva.
- A palavra `PREMIUM` pode receber uma serifada apenas dentro da peça do plano se o uso permanecer coerente com a campanha existente; não vira terceira linguagem espalhada pelo site.

### Cor e imagem

- Preto/carvão domina; amarelo 10 é a cor de ação.
- Dourado aparece em plano e detalhes de marca; ferrugem entra apenas como textura quente ou fundo fotográfico.
- Fotografia real com pretos densos, luz quente e pele preservada.
- Alternância entre macro de técnica — mão, máquina, navalha, acabamento — e plano aberto do ambiente.
- Recortes fotográficos sobrepostos lembram o Instagram, mas com mais respiro e refinamento.

### Gesto visual próprio

**O 10 recortado:** um numeral monumental entra e sai do enquadramento e, em momentos pontuais, funciona como máscara para fotografia. Uma linha amarela curta liga títulos, ações e legendas.

Esse gesto aparece no hero, na abertura de Unidades e no CTA final. Não será repetido em toda seção.

### Hero e navegação

- Fotografia full-bleed de ação ou ambiente ocupando cerca de 60% da tela.
- H1 provisório: `O TALENTO É 10.`; apoio curto e factual sobre corte, barba e estética masculina em Belo Horizonte.
- CTA amarelo de borda reta: `AGENDAR HORÁRIO`.
- Ação secundária em texto: `CONHECER UNIDADES`.
- Header transparente no hero e carvão sólido após o scroll.
- Desktop: logo, âncoras essenciais e CTA. Mobile: logo, botão Menu e painel de tela inteira com CTA ao alcance do polegar.

### Seções

- **Experiência:** “NÃO É SÓ UM CORTE.” em uma grade ordenada com fotografia de gesto à esquerda, manifesto ao centro e comodidades confirmadas da espera — assentos, café e bebidas — ampliadas à direita com ícones funcionais discretos. Técnica, cuidado, ambiente e estilo fecham a seção como pilares.
- **Serviços:** lista vertical de palavras grandes. No desktop, a imagem lateral muda ao foco/hover; no mobile, cada serviço vem acompanhado de sua imagem e não depende de hover.
- **Unidades:** clímax visual depois do hero. Serra e Cruzeiro dividem a tela; a unidade em foco expande a foto e revela endereço, mapa e agendamento. No mobile, viram dois capítulos completos.
- **Planos:** pôster digital baseado na campanha “Corte e Barba Premium”, com área reservada para regras confirmadas. Sem preços ou benefícios não validados.
- **Galeria:** contact sheet/masonry editorial com imagens grandes, verticais e detalhes; não usa grid simétrico.
- **Profissionais:** entra somente com material autorizado, em retratos editoriais — nunca avatars em cards.
- **Avaliações:** uma fala real em grande escala e outras como notas laterais; a nota geral só aparece com fonte e autorização.
- **FAQ:** índice tipográfico com acordeão, linhas retas e sem caixas repetidas.
- **CTA final:** retorno do numeral 10, escolha de unidade e explicação clara de que o clique segue para o BestBarbers.

### Motion

- Hero entra em um gesto único: máscara da foto + conclusão do numeral 10.
- Serviços trocam imagem com crossfade curto.
- Unidades expandem de forma suave ao foco.
- Conteúdo abaixo da dobra revela uma única vez ao entrar na viewport, combinando opacidade com deslocamento curto de 28 px; imagens usam escala mínima e grupos recebem atraso máximo de 210 ms.
- A galeria revela em pequenos grupos, preservando a leitura e o ritmo editorial.
- Sem marquee infinito, scroll hijacking ou parallax forte.
- `prefers-reduced-motion` entrega o estado final sem atraso.

### Mobile

- O numeral 10 vira fundo tipográfico, sem comprimir o texto ao lado da foto.
- Hero recomposto verticalmente, com CTA visível cedo.
- Serviços deixam de ser sticky.
- Endereço e ações de cada unidade permanecem juntos.
- Após o hero, pode surgir uma barra de agendamento compacta, desde que não cubra conteúdo nem foco.

### Risco e mitigação

- Risco: ficar barulhento ou parecer campanha de futebol.
- Mitigação: limitar o numeral a três momentos, manter grandes áreas de respiro e não usar bola, camisa, placar ou símbolos esportivos sem confirmação de que fazem parte da identidade durável.

---

## Direção B — PRETO, OURO & PRECISÃO

### Ideia central

**Evoluir o registro “Corte e Barba Premium” para um site cinematográfico e silencioso, onde cada detalhe comunica técnica, cuidado e atmosfera.**

Três atributos: **sofisticada, cinematográfica, íntima**.

### Referências estéticas

- O post escuro do plano Premium: fotografia noturna, dourado e serifada de alto contraste.
- Editoriais de moda masculina com luz baixa e espaço negativo.
- Livros de fotografia que alternam imagem total, detalhe e texto estreito.
- Metal, espelho e luz quente presentes no espaço real — somente se confirmados pelas fotos.

### Composição e grade

- Página organizada em capítulos verticais, com muito respiro e menos elementos simultâneos.
- Hero 40/60; depois, imagens quase full-bleed alternadas com blocos de texto estreitos.
- Uma linha dourada de 1 px costura a página como “linha de precisão”.
- A assimetria vem das proporções de texto e fotografia, não de colagens.
- Fundos alternam preto quente e papel mineral; sem sombras e quase sem contêineres.

```text
┌ NAV mínima ─────────────────────────────────┐
│ NÃO É SÓ         │ [ RETRATO CINEMATOGRÁFICO │
│ UM CORTE.        │   EM GRANDE ESCALA ]      │
│ texto + CTA      │                            │
├──────────── linha dourada de precisão ───────┤
│ [imagem ampla]       experiência / manifesto │
├────────── serviços em três capítulos ────────┤
│ SERRA ─────────────── fotografia panorâmica  │
│ fotografia panorâmica ─────────── CRUZEIRO   │
├ convite do plano / ensaio fotográfico ───────┤
│ avaliação principal + notas discretas        │
└──────────── agendamento / footer ────────────┘
```

### Tipografia

- Display: `Bodoni Moda` ou `Cormorant Garamond` apenas em frases curtas e no plano, refletindo a linguagem premium já observada.
- Texto e navegação: `IBM Plex Sans` para dar modernidade e legibilidade.
- Utilitário: `IBM Plex Mono` para endereços, datas e fontes.
- A serifada nunca aparece em botões ou parágrafos longos; seu uso é raro e intencional.

### Cor e imagem

- Preto quente e carvão ocupam a maior parte da página.
- Dourado envelhecido vira fio condutor, não brilho decorativo.
- Branco quente preserva contraste sem a dureza do branco puro.
- Ferrugem aparece em uma ou duas passagens, conectando o site às texturas do feed.
- Fotografia real, quente e cinematográfica: preparação, conversa, reflexo, gesto e resultado.
- Planos fechados constroem intimidade; planos abertos distinguem Serra e Cruzeiro.

### Gesto visual próprio

**A linha de precisão:** um filete dourado acompanha a leitura, ancora legendas e conecta técnica, unidade e agendamento, como a linha final de um acabamento bem executado.

### Hero e navegação

- Hero 40/60: bloco preto de texto à esquerda, fotografia quase full-height à direita.
- H1 provisório: `NÃO É SÓ UM CORTE.`; “O talento é 10!” aparece como assinatura menor.
- Copy objetiva e CTA sólido; as duas unidades aparecem discretamente no rodapé do hero.
- Header fino e silencioso, com CTA textual sublinhado em dourado.
- No mobile, a foto abre a experiência e o título encosta parcialmente em sua base, preservando contraste.

### Seções

- **Experiência:** sequência de fotografia, frase e detalhe; cada qualidade precisa de evidência visual real.
- **Serviços:** três capítulos alternados, cada um com fotografia macro e descrição factual curta.
- **Unidades:** dois retratos panorâmicos de lugar, com endereço e ações alinhados pela linha dourada. A diferença vem das fotos reais.
- **Planos:** lâmina clara dentro do fluxo escuro, tratada como convite e baseada apenas em condições confirmadas.
- **Galeria:** ensaio em páginas — uma imagem grande seguida por duas menores — mais contemplativo que masonry.
- **Profissionais:** retratos individuais somente se autorizados; caso contrário, a seção sai.
- **Avaliações:** uma avaliação real principal por bloco, seguida de pequenas notas de apoio. Nada de slider automático.
- **FAQ:** perguntas como índice editorial e respostas abertas sobre o fundo.
- **CTA final:** encerramento calmo e direto, com escolha de unidade e BestBarbers como próximo passo.

### Motion

- A linha dourada é desenhada uma única vez na passagem do hero para a experiência.
- Imagens entram com leve mudança de escala e opacidade.
- Texto aparece por recorte vertical curto; nada “voa”.
- Unidades recebem mudança sutil de contraste ao foco/hover.
- Movimento reduzido apresenta tudo imediatamente.

### Mobile

- A narrativa vira páginas curtas: imagem → frase → contexto → ação.
- Endereço e botões nunca se separam da unidade correspondente.
- A linha muda de vertical para horizontal.
- O respiro diminui, mas a leitura continua calma e cinematográfica.

### Risco e mitigação

- Risco: virar uma barbearia preta e dourada genérica ou depender demais de fotografia que ainda não foi fornecida.
- Mitigação: preservar o logo, o amarelo real, a voz direta e as texturas da marca; se o acervo não sustentar luz e enquadramento cinematográficos, esta direção não deve ser escolhida.

---

## Comparação

| Critério | A — Dez em Destaque | B — Preto, Ouro & Precisão |
|---|---|---|
| Energia | Alta, gráfica, urbana | Contida, elegante, cinematográfica |
| Base observada | Posts de serviços/unidades e logo | Campanha Corte e Barba Premium |
| Assinatura | Numeral 10 recortado | Linha dourada de precisão |
| Hero | Full-bleed e tipográfico | Split 40/60 e atmosférico |
| Serviços | Índice interativo + foto sticky | Capítulos fotográficos alternados |
| Unidades | Dupla composição expansível | Retratos panorâmicos de lugar |
| Galeria | Contact sheet/masonry | Ensaio em páginas |
| Avaliações | Parede tipográfica assimétrica | Uma voz principal por bloco |
| Dependência de fotos | Média | Alta |
| Maior risco | Excesso de ruído | Luxo genérico |

## Recomendação

**Recomendo a Direção A — Dez em Destaque.**

Ela traduz com mais fidelidade a identidade que já existe no Instagram: tipografia grande, recortes, preto, amarelo, textura e o próprio `10` como ativo central. Também oferece uma demonstração comercial mais memorável e continua forte mesmo antes de existir um ensaio fotográfico completo.

A Direção B é mais sóbria e pode funcionar muito bem com um banco de fotos profissional, mas corre maior risco de parecer uma “barbearia premium” intercambiável. A Direção A tem mais chance de provocar a reação desejada na reunião: **“isso parece a 10 & Barber.”**

## Decisão

- Direção escolhida: **Direção A — Dez em Destaque**.
- Quem escolheu/aprovou: Davi, em 08/10/2026.
- Motivo objetivo: é a rota mais fiel à identidade observada no Instagram — logo central, tipografia pesada, recortes, preto, branco e amarelo-dourado — e transforma o `10` em um ativo proprietário da experiência.
- Elementos que não serão misturados: a tipografia serifada dominante, o ritmo contemplativo e a linha dourada contínua da Direção B não entram no sistema gráfico da Direção A; o numeral gigante e as colagens da Direção A não entram na Direção B.
- Tokens atuais: preto `#090909`, carvão `#151719`, grafite `#272A2E`, amarelo `#FFC400`, dourado `#C7972B`, papel `#F2EFE8`; Barlow Condensed 700 para display e Manrope para texto. A escala de títulos foi reduzida e a entrelinha ampliada após revisão do cliente. O arquivo vetorial do logo continua pendente.
- Critérios da primeira implementação: especificidade de marca, impacto do hero, clareza do agendamento, força de Unidades, mobile, fotografia, acessibilidade, ausência de dados inventados e ausência de aparência de template/IA.
