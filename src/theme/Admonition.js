import React from 'react';
import Admonition from '@theme-original/Admonition';
import clsx from 'clsx';

// Map our custom admonition keywords to the Infima alert class that
// `src/css/custom.css` styles. Title/icon are rendered via CSS `::before`.
const CUSTOM_TYPES = {
  quest: 'alert--quest',
  patch: 'alert--patch',
};

export default function AdmonitionWrapper(props) {
  const customClass = CUSTOM_TYPES[props.type];

  // Everything else (note/tip/info/warning/danger) uses the default theme.
  if (!customClass) {
    return <Admonition {...props} />;
  }

  return (
    <div className={clsx('theme-admonition', 'admonition', 'alert', customClass)}>
      <div className="admonition-content">{props.children}</div>
    </div>
  );
}
