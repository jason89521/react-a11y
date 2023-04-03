'use client';

import { useToggleButton } from '@/hooks';

export function ToggleButton() {
  const { buttonProps } = useToggleButton({
    action: () => {
      console.log('Toggle');
    },
  });

  return <button {...buttonProps}>Toggle button</button>;
}
