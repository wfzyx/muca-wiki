---
title: Status Effects
sidebar_label: Status Effects
sidebar_position: 4
---

# Status Effects

Os status effects do MU clássico são majoritariamente debuffs aplicados por skills
específicas. A resistência vem de opções de item (Poison/Ice Resistance) ou do atributo
Energy em alguns contextos.

## Debuffs / Crowd Control

| Effect        | Fonte principal                              | Efeito                                       |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| **Poison**    | Poison Arrow (Elf), monstros                 | Dano periódico (DoT) por alguns segundos     |
| **Freeze/Ice**| Ice Arrow (Elf), Ice Storm (SM)              | Reduz/zera a velocidade de movimento         |
| **Stun**      | Skills de monstros, opções de item           | Imobiliza brevemente (sem ataque/movimento)  |
| **Sleep**     | Monstros específicos                         | Incapacita; qualquer dano quebra o efeito    |
| **Blind**     | Monstros específicos                         | Reduz ATK Rate e visibilidade                |
| **Weakness**  | Monstros                                     | Reduz a efetividade ofensiva do alvo         |
| **Decay**     | Dark Wizard (skill Decay)                    | Dano de veneno ao longo do tempo, em área    |

## Buffs de suporte

### Fairy Elf (escalam com Energy)

| Skill           | Tipo            | Efeito                                             |
| --------------- | --------------- | -------------------------------------------------- |
| Heal            | Self/Ally       | Restaura HP do alvo                                |
| Greater Defense | Buff de Defense | +DEF do alvo (~`20 + ENE / 11`)                    |
| Greater Damage  | Buff de Attack  | +ATK/magic do alvo (~`20 + ENE / 13`)              |
| Bless           | Buff de Stats   | +atributos do alvo (~`ENE / 80`, cap 460)          |
| Cure            | Remoção         | Remove efeitos negativos com chance percentual     |
| Ice Arrow       | Ataque / CC     | Dano + chance de freeze                            |
| Poison Arrow    | Ataque / DoT    | Dano + Poison                                      |

### Dark Wizard / Soul Master — Soul Barrier

Escudo mágico que absorve parte do dano convertendo-o em custo de Mana. Quando a Mana acaba,
o escudo cessa. É um dos buffs de suporte mais valiosos do jogo clássico.

```text
Absorção (%) = 10 + AGI / 50 + ENE / 200
```

:::patch
Coeficientes e valores exatos variam por season/servidor — confira os Tutoriais do fórum.
:::
