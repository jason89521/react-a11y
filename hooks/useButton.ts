import type { KeyboardEvent, KeyboardEventHandler, MouseEvent, MouseEventHandler } from 'react';

export type ButtonState = {
  disabled: boolean;
};

export type ButtonProps<T = Element> = {
  /** The action may be fired by keyboard (space or enter) or the mouse click. */
  action: (event: KeyboardEvent<T> | MouseEvent<T>) => void;
};

export function useButton<T = Element>({ action }: ButtonProps<T>) {
  const handleKeyUp: KeyboardEventHandler<T> = event => {
    switch (event.key) {
      case ' ':
        action(event);

        break;

      default:
        break;
    }
  };

  const handleKeyDown: KeyboardEventHandler<T> = event => {
    switch (event.key) {
      case 'Enter':
        action(event);

        break;

      default:
        break;
    }
  };

  const handleClick: MouseEventHandler<T> = event => {
    action(event);
  };

  return {
    role: 'button',
    tabIndex: 0,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
  };
}
