---
title: Eventos & Dungeons
sidebar_label: Eventos & Dungeons
sidebar_position: 3
---

import Gallery from '@site/src/components/Gallery';

# Eventos & Dungeons

Horários em **GMT-3 (Brasília)**, aproximados (podem variar com uptime/horário de verão).

## Tabela de horários

| Evento          | Horários                                            |
| --------------- | --------------------------------------------------- |
| Blood Castle    | a cada :30 (00:30 → 23:30)                           |
| Devil Square    | a cada :00 (00:00 → 23:00)                           |
| Chaos Castle    | 02:00 · 05:30 · 10:00 · 13:30 · 18:00 · 21:30        |
| White Wizard    | 00:00 · 08:00 · 16:00                                |
| Death King      | 03:30 · 11:30 · 19:30                                |
| Red Dragon      | 06:00 · 14:00 · 22:00                                |
| Gold Invasion   | 07:30 · 15:30 · 23:30                                |
| Illusion Temple | vários horários ao longo do dia                      |
| Loren Deep      | 20:00                                                |
| Crywolf         | **Sábados às 18:40**                                 |
| Castle Siege    | **Domingos 21:00–22:30**                             |

## Blood Castle

Roda a cada 30 min; 15 min por entrada (os 2 min finais para entregar a arma ao Fallen Angel).

<Gallery variant="set" items={[
  {src: '/img/tutorials/item-invisibility-cloak.jpg', caption: 'Invisibility Cloak'},
  {src: '/img/tutorials/npc-messenger-archangel.jpg', caption: 'Messenger of Archangel'},
]} />

:::quest
**Entrada:** Invisibility Cloak +X (X = nível do BC). Combine no Chaos Goblin (Noria):
1× Jewel of Chaos + 1× Scroll of Archangel +X + 1× Blood Bone +X. **Sucesso 80%** (90% com
vitória no Crywolf). NPC de entrada: Messenger of Archangel (Devias, na igreja).
:::

| BC | Resets | Recompensa (sucesso) |
| -- | ------ | -------------------- |
| 1–2 | 0–24  | 20kk → 50kk Zen      |
| 3–4 | 25–99 | 100kk → 150kk Zen    |
| 5–6 | 100–199 | 200kk → 250kk + SD/Complex Potions |
| 7  | 200+  | 250kk + SD +9 / Complex +9 |

Zen: 70% para o maior dano, 30% aleatório (BC7: 100% maior dano). Sem perda de XP/itens na morte.

## Devil Square

Roda a cada hora. Sem PvP e sem penalidade de morte; ranking por pontos de kill.

<Gallery variant="set" items={[
  {src: '/img/tutorials/item-devils-invitation.png', caption: 'Invitation to Devil Square'},
  {src: '/img/tutorials/npc-charon.jpg', caption: 'Charon (Noria)'},
]} />

:::quest
**Entrada:** Invitation to Devil Square +X. Combine no Chaos Goblin (Noria): 1× Jewel of
Chaos + 1× Devil's Key +X + 1× Devil's Eye +X. Sucesso por nível: DS1 75% → DS6 50% (+10%
com vitória no Crywolf). NPC de entrada: Charon (Noria, 171/109).
:::

Recompensas por colocação (XP + Zen), de **10M XP / 150M Zen** (DS1, 1º lugar) até
**35M XP / 300M Zen** (DS6, 1º lugar). No fim, monstros dourados dropam Box of Kundun.

## Chaos Castle

6× ao dia. Objetivo: ser o último sobrevivente (mapa encolhe; ser empurrado para fora elimina).

<Gallery variant="set" items={[
  {src: '/img/tutorials/item-armor-of-guardsman.gif', caption: 'Armor of Guardsman'},
]} />

:::quest
**Entrada:** Armor of Guardsman (comprado da Potion Girl em Atlans/Tarkan/Lorencia/Loren).
Entrada no Event Square [208, 76].
:::

| CC | Custo de entrada | Drops dos monstros        |
| -- | ---------------- | ------------------------- |
| 1  | 2.000.000        | 1 Bless + 1 Soul + 4 Chaos|
| 2  | 5.000.000        | 1 Bless + 1 Soul + 4 Chaos|
| 3  | 10.000.000       | 1 Bless + 1 Soul + 3 Chaos|
| 4  | 15.000.000       | 1 Bless + 1 Soul + 3 Chaos|
| 5  | 20.000.000       | 1 Bless + 2 Soul + 2 Chaos|
| 6  | 30.000.000       | 1 Bless + 2 Soul + 2 Chaos|

Vencedor: Box of Kundun + jewels (níveis altos: Loch's Feather / Ancient).

## Castle Siege

Domingos 21:00–22:30, no Valley of Loren. PvP total (sem CTRL, sem penalidade de PK). Só o
Guild Master da aliança principal registra com o NPC Guardsman; competem as 3 guildas com
mais **Sign of Lord**. A guilda vencedora vira **Castle Lord**: acesso ao **Land of Trials**,
controle do NPC Senior (taxa de mercado até 5%, upgrades, Lord Mix).

## Crywolf Fortress

Sábados às 18:40, 30 min. Nível mínimo: **250** (DW/DK/FE) ou **166** (MG/DL). Defenda a Wolf
Statue [125, 31] e os 5 altares. Muse Elfs (nível 350+) firmam contratos nos altares para
gerar escudo (máx. 2 por Elf; o efeito ativa após 5 min).

- **Vitória (1 semana):** Kundun não regenera HP · +10% nos convites de BC/DS · HP dos monstros −10%.
- **Derrota:** Kundun regenera HP · NPCs/baús somem · **−50% no drop de jewels** · XP reduzida.

## Battle Soccer

Iniciado por um Guild Master via `/soccer <guilda>`. Nível mínimo 50, times de 1–5 (com o GM).
Duração 10 min. Pontos: matar o GM inimigo = 1, gol = 20.

## Invasões

- **White Wizard & Orcs** (00:00/08:00/16:00) — Lorencia/Noria/Devias. White Wizard dropa
  Jewel of Bless; os Destructive Ogres dropam **Ring of Wizard** (+10% dano mágico/físico/vel.).
- **Death King** (03:30/11:30/19:30) — Lorencia/Noria; dropa pacotes de Bless/Soul.
- **Gold Invasion** (07:30/15:30/23:30) — ver [Raids & World Bosses](./raids.mdx).

:::patch
Horários, requisitos e recompensas seguem os [Tutoriais](https://forum.mucabrasil.com.br/forums/13-Tutoriais)
e os avisos de Manutenção. **Illusion Temple, Imperial Guardian e Loren Market** aparecem no
servidor mas não têm tutorial dedicado indexado.
:::
