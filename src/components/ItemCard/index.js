import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Rarity drives border + title color. Keep keys aligned with `styles.module.css`.
const RARITIES = {
  Common: {label: 'Common', className: styles.common},
  Rare: {label: 'Rare', className: styles.rare},
  Epic: {label: 'Epic', className: styles.epic},
  Legendary: {label: 'Legendary', className: styles.legendary},
};

/**
 * <ItemCard /> — infobox para itens de Mu Online, embutível em MDX.
 *
 * @param {string}   title       Nome do item (mantido no original do jogo).
 * @param {string}   rarity      'Common' | 'Rare' | 'Epic' | 'Legendary'.
 * @param {string}   type        Tipo/slot do item (ex.: 'Two-Handed Sword').
 * @param {string[]} stats       Linhas de atributos.
 * @param {string}   description Lore em itálico (opcional).
 */
export default function ItemCard({title, rarity = 'Common', type, stats = [], description}) {
  const tier = RARITIES[rarity] ?? RARITIES.Common;

  return (
    <aside className={clsx(styles.card, tier.className)} role="group" aria-label={`${title} (${tier.label})`}>
      <header className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.rarity}>{tier.label}</span>
      </header>

      {type && <p className={styles.type}>{type}</p>}

      {stats.length > 0 && (
        <ul className={styles.stats}>
          {stats.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}

      {description && <p className={styles.description}>{description}</p>}
    </aside>
  );
}
