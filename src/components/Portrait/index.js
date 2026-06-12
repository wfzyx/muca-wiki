import React from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

// Floated class portrait, baseUrl-aware.
export default function Portrait({src, alt, width = 200}) {
  const {withBaseUrl} = useBaseUrlUtils();
  return <img className="classPortrait" src={withBaseUrl(src)} alt={alt} width={width} loading="lazy" />;
}
