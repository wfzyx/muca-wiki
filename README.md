# Muca Wiki

Wiki da comunidade para o servidor **Mu Online — Muca Brasil**, construída com
[Docusaurus](https://docusaurus.io/) 3 e publicada no **GitHub Pages**.

> Conteúdo fan-made (não oficial e independente). Fontes: os
> [Tutoriais](https://forum.mucabrasil.com.br/forums/13-Tutoriais) e os avisos de
> **Manutenção** do fórum. Posts mais recentes **substituem** os antigos.
> Nomes de itens/skills/mapas são mantidos no original do jogo.

## Stack

- Docusaurus 3 (preset `classic`)
- Idioma padrão: **pt-BR**
- Dark mode por padrão (`respectPrefersColorScheme: false`)
- Deploy automático via GitHub Actions → GitHub Pages

## Desenvolvimento

```bash
bun install      # instalar dependências
bun start        # servidor local em http://localhost:3000
bun run build    # build de produção (gera ./build)
bun run serve    # servir o build localmente
```

## Estrutura

```
docs/
├─ intro.md                 # landing (/docs/, slug "/")
├─ classes-builds/          # 🛡️ uma página por classe (DK, DW, FE, MG, DL)
├─ itens-crafting/          # ⚔️ weapons, armor, consumables, chaos-machine
├─ mundo-dungeons/          # 🗺️ mapas, eventos, raids, quests
├─ mecanicas/               # 🧮 stats, dano, status, progressão, comandos
└─ servidor/                # 🌐 equipe, salas, regras, links, contribuir

blog/                       # "Patch Notes / Manutenção" (rota /patch-notes)
static/img/
├─ tutorials/               # imagens dos tutoriais (classes, bosses, quests)
└─ maps/                    # screenshots dos mapas
src/
├─ components/ItemCard/     # infobox de item embutível em MDX
├─ components/BossCard/     # card ilustrado de boss/evento
├─ theme/Admonition.js      # callouts :::quest e :::patch
├─ pages/index.js           # homepage
└─ css/custom.css           # tema "gaming" (dark, callouts, blog, galerias)
```

> Categorias usam `_category_.json` (rótulo, ordem, página inicial). Títulos de admonition
> usam a sintaxe MDX 3: `:::tip[Título]` (não `:::tip Título`).

Cada pasta de categoria usa um `_category_.json` para definir rótulo, ordem e a página
inicial — adicionar um guia é só soltar um `.mdx` na pasta certa.

## Componentes e callouts

**ItemCard** — infobox de item, embutível em qualquer `.mdx`:

```mdx
import ItemCard from '@site/src/components/ItemCard';

<ItemCard
  title="Sword of Destruction"
  rarity="Legendary"
  type="Two-Handed Sword"
  stats={['Attack Power: 145 ~ 152', 'Required Strength: 660']}
  description="Lore em itálico (opcional)."
/>
```

`rarity` aceita `Common | Rare | Epic | Legendary` (muda borda/cor).

**Callouts de jogo** (admonitions customizadas):

```md
:::quest
Requisitos de quest / evolução.
:::

:::patch
Mudanças de patch / manutenção.
:::
```

## Fontes & Referências

Conteúdo compilado a partir destas fontes (em caso de conflito, o **post mais recente** do
fórum prevalece):

**Oficiais — Muca Brasil**
- Fórum · Tutoriais: https://forum.mucabrasil.com.br/forums/13-Tutoriais
- Fórum · Site (Página Inicial / Manutenções): https://forum.mucabrasil.com.br/forums/7-Site-%28P%C3%A1gina-Inicial%29
- Site: https://www.mucabrasil.com.br/ · Hall da Fama: https://www.mucabrasil.com.br/?go=hallfama · Equipe: https://www.mucabrasil.com.br/?go=equipe
- Shop: https://shop.mucabrasil.com.br/
- Tópico de referência (salas/dúvidas): https://forum.mucabrasil.com.br/threads/42744

**Imagens & referência de MU Online (genérico)**
- Mapas (1024²): https://muonlinefanz.com/tools/maps/
- Mapas: https://guide.fortmu.com/category/muonline-maps/
- Ancient Sets (referência de layout): https://wiki.infinitymu.net/
- Wiki MU geral: https://muonline.fandom.com/

> Nomes de itens/skills/mapas/NPCs são mantidos **no original do jogo** (não traduzidos).

## Deploy (GitHub Pages)

1. Em `docusaurus.config.js`, troque `GITHUB_ORG` e `GITHUB_REPO`.
   - Domínio padrão `<user>.github.io/<repo>/` → mantenha `baseUrl: '/<repo>/'`.
   - Domínio customizado (CNAME) → use `baseUrl: '/'`.
2. No GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Faça push para `main`. O workflow `.github/workflows/deploy.yml` builda e publica.

> **Last update time:** depois do primeiro commit, ative `showLastUpdateTime: true`
> no bloco `docs` do config (ele lê o histórico do git e falha em repositório sem commits).
