import React from 'react';
import clsx from 'clsx';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Tier accent — reuse the rarity palette idea from ItemCard.
const TIERS = {
  world: styles.world, // world boss (gold)
  event: styles.event, // event boss (purple)
  invasion: styles.invasion, // invasion mob (red)
};

/**
 * <BossCard /> — illustrated card for a Mu Online boss / world event.
 *
 * @param {string}   name     Boss name (kept in original game form).
 * @param {string}   image    Path under /static (e.g. '/img/tutorials/boss-hell-maine.gif').
 * @param {string}   tier     'world' | 'event' | 'invasion' — drives accent color.
 * @param {string}   location Map / coordinates.
 * @param {string}   respawn  Respawn / schedule text.
 * @param {string[]} drops    Drop lines.
 */
export default function BossCard({name, image, tier = 'world', location, respawn, drops = []}) {
  const {withBaseUrl} = useBaseUrlUtils();
  return (
    <aside className={clsx(styles.card, TIERS[tier] ?? TIERS.world)} role="group" aria-label={name}>
      {image && (
        <div className={styles.thumb}>
          <img src={withBaseUrl(image)} alt={name} loading="lazy" />
        </div>
      )}
      <div className={styles.body}>
        <h4 className={styles.name}>{name}</h4>
        {location && (
          <p className={styles.meta}>
            <span className={styles.label}>Local</span> {location}
          </p>
        )}
        {respawn && (
          <p className={styles.meta}>
            <span className={styles.label}>Respawn</span> {respawn}
          </p>
        )}
        {drops.length > 0 && (
          <ul className={styles.drops}>
            {drops.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
