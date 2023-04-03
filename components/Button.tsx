'use client';
import { useButton } from '@/hooks';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

export function Button({ children, className }: Props) {
  const { buttonProps } = useButton({
    elementType: 'div',
    action: () => {
      console.log('Fire an action.');
    },
  });

  return (
    <div className={className} {...buttonProps}>
      {children}
    </div>
  );
}
