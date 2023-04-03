'use client';

import { useToggleButton } from '@/hooks';

export function ToggleButton() {
  const { buttonProps } = useToggleButton({
    action: () => {
      console.log('Toggle');
    },
  });

  return <div {...buttonProps}>Toggle button</div>;
}
