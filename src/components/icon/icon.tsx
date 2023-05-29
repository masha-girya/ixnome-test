import React, { memo } from 'react';
import { ReactComponent as Loupe } from 'assets/icons/loupe.svg';

export const ICONS = {
  loupe: Loupe,
} as const;

export type TIcon = keyof typeof ICONS;

export const Icon = memo(({ type }: { type: TIcon }) => {
  const IconComponent = ICONS[type];

  return (
    <IconComponent />
  );
});

Icon.displayName = 'Icon';
