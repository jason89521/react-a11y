'use client';
import { useButton } from '@/hooks';

export function Button() {
  const buttonProps = useButton({
    action: () => {
      console.log('Fire the action');
    },
  });

  return <div {...buttonProps}>Button...</div>;
}
