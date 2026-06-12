import React from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

// Image grid that is baseUrl-aware (raw <img src="/img/..."> does NOT get the
// site baseUrl prefix and 404s on GitHub Pages — this fixes that).
// variant 'map' = square-cropped tiles; 'set' = whole-image (contain).
export default function Gallery({items = [], variant = 'map'}) {
  const {withBaseUrl} = useBaseUrlUtils();
  const cls = variant === 'set' ? 'setGrid' : 'mapGallery';
  return (
    <div className={cls}>
      {items.map((it, i) => (
        <figure key={i}>
          <img src={withBaseUrl(it.src)} alt={it.alt || it.caption || ''} loading="lazy" />
          {it.caption && <figcaption>{it.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
