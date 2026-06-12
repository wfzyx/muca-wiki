# Repository conventions

## Git commits

- **Do not co-sign commits.** Never add a `Co-Authored-By` / `Co-authored-by` trailer
  (or any AI/assistant attribution) to commits in this repository.
- Commits are authored by the repository owner only.

## Project

**Muca Wiki** — community (unofficial, independent) Docusaurus wiki for the Mu Online
*Muca Brasil* server.

- Package manager: **bun** (never npm).
- **Source of truth:** the Muca Brasil forum — [Tutoriais](https://forum.mucabrasil.com.br/forums/13-Tutoriais)
  and [Site / Notícias](https://forum.mucabrasil.com.br/forums/7-Site-%28P%C3%A1gina-Inicial%29).
  Newer posts supersede older ones.
- Keep in-game proper nouns (items, skills, maps, NPCs) **untranslated**.
- Admonition titles use MDX 3 syntax: `:::tip[Título]`.
- Reference images via the `Gallery` / `Portrait` components or markdown `![]()` (never raw
  `<img src="/img/...">`, which breaks under the GitHub Pages baseUrl).
