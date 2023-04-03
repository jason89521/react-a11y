import type {
  ElementType,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';

export type ButtonProps<T = Element> = {
  /** Default is `button`. You should specify this prop if you want another element act like a button. For example, `div`. */
  elementType?: ElementType;
  /** The action may be fired by keyboard (space or enter) or the mouse click. */
  action?: (event: KeyboardEvent<T> | MouseEvent<T>) => void;
  /** Whether the button is disabled. */
  disabled?: boolean;
  /** If the children of the button cannot be used as a recognized name, for example, an icon, then you should provide a label of the button. */
  label?: string;
};

export function useButton<T = Element>({
  elementType = 'button',
  action,
  disabled,
  label,
}: ButtonProps<T>) {
  const fireAction = (event: KeyboardEvent<T> | MouseEvent<T>) => {
    if (disabled) return;
    action?.(event);
  };

  const handleKeyUp: KeyboardEventHandler<T> = event => {
    if (event.key === ' ') {
      fireAction(event);
    }
  };

  const handleKeyDown: KeyboardEventHandler<T> = event => {
    if (event.key === 'Enter') {
      fireAction(event);
    }
  };

  const handleClick: MouseEventHandler<T> = event => {
    fireAction(event);
  };

  const buttonProps = (() => {
    const commonProps = {
      onClick: handleClick,
      'aria-label': label,
    };
    if (elementType === 'button') {
      return {
        disabled,
        ...commonProps,
      };
    } else {
      return {
        role: 'button',
        tabIndex: disabled ? undefined : 0,
        onKeyUp: handleKeyUp,
        onKeyDown: handleKeyDown,
        'aria-disabled': disabled,
        ...commonProps,
      };
    }
  })();

  return {
    buttonProps,
  };
}
