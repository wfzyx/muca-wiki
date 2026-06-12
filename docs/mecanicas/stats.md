---
title: Stats
sidebar_label: Stats
sidebar_position: 2
---

# Stats (Atributos)

No MU clássico (até Season 6), cada personagem distribui **5 pontos por nível** (7 para
Magic Gladiator e Dark Lord) entre os atributos primários, que alimentam todas as
estatísticas derivadas de combate.

## Atributos primários

| Atributo     | Quem tem  | Efeito principal                                                          |
| ------------ | --------- | ------------------------------------------------------------------------- |
| **Strength** | Todos     | Dano físico (Attack Power) e requisitos de equipamento                    |
| **Agility**  | Todos     | Defense, Attack Speed, Attack Success Rate e Defense Success Rate         |
| **Vitality** | Todos     | HP máximo                                                                 |
| **Energy**   | Todos     | Dano mágico (Wizardry), MP máximo, recarga de mana e AG máximo            |
| **Command**  | Dark Lord | Exclusivo: comanda pets, desbloqueia skills e contribui para o ATK Rate   |

Para a **Agility Elf**, Agility também contribui diretamente para o dano de arco. Para o
**Soul Master**, Energy é o atributo ofensivo principal.

## Estatísticas derivadas

As fórmulas abaixo são orientativas (Season 4–6); coeficientes variam por servidor.

### HP

| Classe         | Fórmula (aproximada)               |
| -------------- | ---------------------------------- |
| Dark Knight    | `35 + (LVL - 1) × 2 + VIT × 3`     |
| Soul Master    | `30 + (LVL - 1) × 1 + VIT × 2`     |
| Fairy Elf      | `40 + (LVL - 1) × 1 + VIT × 2`     |
| Magic Gladiator| `58 + (LVL - 1) × 1 + VIT × 2`     |
| Dark Lord      | `50 + (LVL - 1) × 1.5 + VIT × 2`   |

### AG (Ability Gauge / Stamina)

Recurso consumido por skills especiais (combo do DK, tiro carregado da Elf). Recupera com o
tempo e é alimentado por todos os atributos, com peso variável por classe.

### SD (Shield Defense)

Barra de escudo presente no Season 6. Em **PvP, 90% do dano** recebido é absorvido pelo SD
antes de atingir o HP; só 10% vai direto ao HP. Quando o SD zera, 100% do dano PvP passa ao HP.

```text
SD base = LVL × (LVL / 30) + bônus de equipamentos e opções
```

O SD não se regenera sozinho fora de safe zones (salvo opções de item específicas).

### Defense, Attack Rate e Defense Rate

- **Defense** reduz o dano recebido (alimentada por AGI + equipamentos).
- **Attack Success Rate** é a probabilidade de o ataque conectar.
- **Defense Success Rate** é a probabilidade de o alvo desviar.

:::tip[Over Rate Bonus]
Quando o Defense Rate do alvo é **maior** que o Attack Rate do atacante, o defensor ganha
**97% de chance de desviar** e recebe **80% menos dano** quando acertado — o que torna
Agility extremamente valiosa em builds defensivas.
:::

:::patch
Coeficientes e valores exatos variam por season/servidor — confira os Tutoriais do fórum.
:::
