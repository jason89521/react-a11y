import type { KeyboardEvent, MouseEvent } from 'react';
import { useState } from 'react';
import type { ButtonProps } from './useButton';
import { useButton } from './useButton';

export type ToggleButtonProps<T = Element> = {
  defaultPressed?: boolean;
} & ButtonProps<T>;

export function useToggleButton<T = Element>({
  defaultPressed = false,
  action,
  ...props
}: ToggleButtonProps<T>) {
  const [isPressed, setIsPressed] = useState(defaultPressed);
  const handleAction = (event: MouseEvent<T> | KeyboardEvent<T>) => {
    setIsPressed(!isPressed);
    action(event);
  };
  const rawButtonProps = useButton({ action: handleAction, ...props });
  const buttonProps = { ...rawButtonProps, 'aria-pressed': isPressed };

  return {
    isPressed,
    buttonProps,
  };
}
