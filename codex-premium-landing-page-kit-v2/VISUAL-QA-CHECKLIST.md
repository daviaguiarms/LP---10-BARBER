# Crítica visual e segunda passada

Registre evidências após abrir a página real. Não marque por inspeção mental do código.

## Evidências observadas

- URL/ambiente: build de produção em `http://127.0.0.1:4173/`
- Data: 08/10/2026
- Viewports inspecionados: desktop 1280×720 e 1440×900; mobile 390×844 e 393×851; overflow automatizado em 320, 375, 390 e 430 px
- Screenshots/arquivos: `screenshots/home-desktop.png`, `screenshots/home-mobile.png`, `screenshots/home-mobile-hero.png`, `screenshots/hero-desktop.png`, `screenshots/hero-mobile.png`, `screenshots/services-desktop.png`, `screenshots/services-mobile.png`, `screenshots/locations-desktop.png`, `screenshots/locations-mobile.png`, `screenshots/experience-desktop.png`, `screenshots/experience-mobile.png`
- Navegadores: Google Chrome via Playwright

## Primeira crítica

- [x] O hero comunica marca, oferta e ação em poucos segundos
- [x] Existe um ponto focal claro em cada viewport
- [x] A hierarquia tipográfica continua forte no mobile
- [x] Ritmo alterna densidade e respiro com intenção
- [x] Alinhamentos, bordas, raios e sombras formam um sistema
- [x] Fotografias parecem deliberadamente escolhidas e recortadas
- [x] A página tem pelo menos uma decisão memorável específica da marca
- [x] O CTA primário domina sem gritar em todas as seções
- [x] A leitura e a ordem fazem sentido sem animação
- [x] Não há sinais óbvios de montagem por template/IA

## Caça a “cara de IA”

- [x] Remover cards que não precisam ser cards
- [x] Remover badges, pills, ícones e brilhos sem função
- [x] Substituir headlines genéricas por conteúdo específico
- [x] Variar composições repetitivas sem destruir consistência
- [x] Corrigir excesso de centralização e simetria automática
- [x] Unificar componentes que parecem vir de bibliotecas diferentes
- [x] Reduzir animações repetidas ou decorativas
- [x] Questionar gradientes, glassmorphism, sombras e raios excessivos
- [x] Confirmar que nenhuma seção existe apenas para preencher espaço

## Problemas encontrados

| Prioridade | Viewport | Problema | Ajuste proposto | Resolvido |
|---|---|---|---|---|
| Alta | Mobile | Barra fixa de agendamento aparecia sobre o CTA do hero | Exibir somente depois que o visitante deixa o hero e ocultar perto do footer | Sim |
| Média | Desktop/mobile | Imagem provisória da unidade Cruzeiro não comunicava barbearia | Substituir por fotografia de interior coerente e manter aviso de acervo pendente | Sim |
| Média | Desktop/mobile | Terceira unidade usava foto provisória com identidade visual de outra barbearia | Trocar por imagem neutra de atendimento e manter aviso de acervo oficial pendente | Sim |
| Média | Mobile | CTA fixo oferecia somente o app | Dividir a barra em duas ações claras: app e WhatsApp | Sim |
| Baixa | Desktop/mobile | Lista resumida escondia serviços já publicados no agendamento | Organizar o catálogo real em quatro grupos sem duplicações | Sim |
| Alta | Desktop/mobile | Anton em escala muito alta e caixa alta fazia os títulos parecerem agressivos e aproximava acentos de linhas vizinhas | Trocar por Barlow Condensed 700, reduzir a escala, ampliar a entrelinha e usar caixa normal nos títulos principais | Sim |
| Média | Desktop/mobile | Conteúdo abaixo da dobra aparecia de forma estática e sem progressão durante a rolagem | Aplicar reveal único com opacidade, deslocamento curto e stagger discreto, respeitando `prefers-reduced-motion` | Sim |
| Média | Desktop/mobile | A seção Experiência parecia dispersa e a coluna esquerda tinha espaço negativo excessivo | Reorganizar em uma grade clara: fotografia à esquerda, mensagem ao centro e comodidades ampliadas à direita; empilhar em ordem editorial no mobile | Sim |
| Média | Screenshots | Imagens lazy não apareciam na captura de página inteira | Rolagem controlada para carregar mídia antes da screenshot | Sim |
| Baixa | Todos | Pacotes de fonte carregavam alfabetos desnecessários | Carregar apenas os arquivos Latin necessários ao português | Sim |

## Segunda passada obrigatória

- [x] Ajustei escala/tipografia e quebras de linha
- [x] Ajustei espaçamentos e ritmo entre seções
- [x] Refinei recortes e proporções de mídia
- [x] Reforcei a direção escolhida e removi ruído
- [x] Revisei estados hover, focus e active; não há controles desabilitados nesta versão
- [x] Revisei motion e `prefers-reduced-motion`
- [x] Reinspecionei screenshots desktop e mobile após as mudanças
- [x] Registrei o que mudou perceptivelmente: catálogo expandido, três unidades, horários, escolha entre app/WhatsApp, comodidades da experiência e nova hierarquia tipográfica com Barlow Condensed, títulos menores e acentos livres de colisão

## Veredito

- O que agora parece específico deste cliente: o logo real, o numeral 10 como enquadramento recorrente, amarelo como sinal de ação, tipografia condensada e composição derivada dos posts da marca.
- O que ainda está genérico: as fotografias são referências licenciadas e não mostram as unidades, equipe ou trabalhos reais.
- Limitações conhecidas: fotos oficiais das três unidades, conteúdo final de profissionais, reviews textuais, preços por unidade e regras dos planos permanecem pendentes de Lucas.
- Aprovado para QA técnico por: Codex, após segunda passada visual.
