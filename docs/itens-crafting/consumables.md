---
title: Consumables & Jewels
sidebar_label: Consumables & Jewels
sidebar_position: 4
---

# Consumables & Jewels

## Potions

Valores de recuperação no Muca Brasil:

| Potion                  | HP   | SD   | Mana |
| ----------------------- | ---- | ---- | ---- |
| Apple                   | 5%   | —    | —    |
| Small / Medium / Large HP | 10 / 15 / 20% | — | — |
| Small / Medium / Large MP | — | — | 10 / 20 / 30% |
| Small / Medium / Large Complex | 6 / 10 / 14% | 6 / 10 / 14% | — |
| Small / Medium / Large SD | — | 10 / 14 / 18% | — |

- **Complex Potions** dropam de monstros e recuperam HP **e** SD ao mesmo tempo.
- **SD Potions** só são obtidas via [Chaos Machine](./chaos-machine.md#sd-potions).
- **Limites de uso:** grupo HP/SD/Complex = 8 usos/s (máx. 4 por tipo); grupo MP/Antidote = 4/s.

## Shield System (SD)

O **SD** é uma barra de escudo. Em **PvP, 90% do dano** é absorvido pelo SD e **10%** vai
direto ao HP; com SD zerado, 100% vai ao HP. Recupera totalmente ao morrer e gradualmente em
safe zone.

```text
SD = ((Strength + Vitality + Agility + Energy + Command) × 1.2)
     + (Level² / 30)
     + (Defesa total × 0.5)
```

:::patch
A opção **SD Ratio** (Jewel of Harmony) muda o split de 90/10 para **95/5** no PvP, e a opção
**SD Bypass** dá 10–15% de chance de ignorar o SD. Valores seguem os Tutoriais.
:::

## Jewels

| Jewel                  | Função principal                                                  |
| ---------------------- | ----------------------------------------------------------------- |
| **Jewel of Bless**     | +1 nível do item (+0 a +6), 100%                                  |
| **Jewel of Soul**      | +1 nível do item (+6 a +9), 65% (85% com Luck)                    |
| **Jewel of Life**      | Opção de vida (+4 por vez, até +16), 60%                          |
| **Jewel of Chaos**     | Combinações na Chaos Machine                                      |
| **Jewel of Creation**  | Criação de pets e Wings de nível 3                                |
| **Jewel of Guardian**  | Defesas de Castle Siege / Life Stones                             |
| **Jewel of Harmony**   | Opção amarela no item (ver [Armor](./armor.md))                   |
| **Gemstone**           | Refinada em Jewel of Harmony (NPC Elpis, Refinement Tower)         |

**NPC Lahap (Devias [192, 18])** comprime/descomprime Jewel of Bless e Soul em pacotes de
10–100 (pacotes de 40+ exigem **Premium**).

## Itens de evento

| Item                        | Uso                                                       |
| --------------------------- | --------------------------------------------------------- |
| Loch's Feather              | Criar Wings nível 2                                       |
| Crest of Monarch            | Criar Cape of Lord (Dark Lord)                            |
| Condor Feather / Flame      | Criar Wings nível 3 (Flame vem do Barracks/Crywolf)       |
| Ring of Wizard              | Drop dos Ogres (White Wizard); +10% dano mágico/físico/vel.|
| Town Portal Scroll          | Teleporta para a área segura mais próxima                  |
| Arrows / Bolts              | Munição da Fairy Elf (arco / besta)                       |
