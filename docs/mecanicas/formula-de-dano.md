---
title: Fórmula de Dano
sidebar_label: Fórmula de Dano
sidebar_position: 3
---

# Fórmula de Dano

## Conceito geral

```text
-- Dano base (PvM) --

Attack Power = [Min_DMG, Max_DMG]   ← o jogo sorteia um valor dentro do intervalo
Dano final   = valor_sorteado - Defense_do_alvo
  Se (Dano final < 0) → dano = 1   (nunca 0; sempre ao menos 1)

-- Check de acerto (antes do dano) --

Se Attack_Success_Rate > Defense_Success_Rate  → o ataque pode conectar (check probabilístico)
Se Attack_Success_Rate < Defense_Success_Rate  → "Over Rate": 97% de MISS; se acertar, -80% de dano
```

## Attack Power por classe (dano de stats)

| Classe          | Min DMG            | Max DMG            |
| --------------- | ------------------ | ------------------ |
| Dark Knight     | `STR / 6`          | `STR / 4`          |
| Soul Master     | `ENE / 9`          | `ENE / 4`          |
| Fairy Elf       | `STR/14 + AGI/7`   | `STR/8 + AGI/4`    |
| Magic Gladiator | `STR/6 + ENE/12`   | `STR/4 + ENE/8`    |
| Dark Lord       | `STR/7 + ENE/14`   | `STR/5 + ENE/10`   |

> Esse é o dano "base de stats". O dano final soma ainda o dano da arma, opções de item
> (+damage, +skill), nível do item (+X) e o bônus de set completo.

## Crítico e Excellent

- **Critical Damage** (texto azul) — usa sempre o **valor máximo** do range (ignora o sorteio).
- **Excellent Damage** (texto verde) — `Critical DMG × 1.1`; opção Excellent dá ~5% de chance base.
- **Ignore Defense** — algumas opções Excellent ignoram completamente a Defense do alvo.

## PvP

```text
1. Verifica Attack Rate vs Defense Rate (mesmo sistema de hit/miss)
2. 90% do dano vai para o SD; 10% vai direto ao HP
3. SD = 0 → 100% do dano vai ao HP
4. Penalidade de PK: matar sem Self-Defense ativo → drop de item, perda de XP e
   restrições de NPC conforme o nível de PK
```

Não há um multiplicador flat universal de "redução de dano PvP" nas versões clássicas — a
principal proteção é o SD absorvendo 90% do dano enquanto estiver cheio.

:::patch
Coeficientes e valores exatos variam por season/servidor — confira os Tutoriais do fórum.
:::
