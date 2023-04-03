import type {
  AriaAttributes,
  AriaRole,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';

export type ButtonProps<T = Element> = {
  /** The action may be fired by keyboard (space or enter) or the mouse click. */
  action: (event: KeyboardEvent<T> | MouseEvent<T>) => void;
  /** Whether the button is disabled. */
  disabled?: boolean;
  /** If the children of the button cannot be used as a recognized name, for example, an icon, then you should provide a label of the button. */
  label?: string;
};

type Return<T = Element> = {
  role: AriaRole;
  tabIndex?: number;
  onKeyUp: KeyboardEventHandler<T>;
  onKeyDown: KeyboardEventHandler<T>;
  onClick: MouseEventHandler<T>;
  'aria-disabled': AriaAttributes['aria-disabled'];
  'aria-label': AriaAttributes['aria-label'];
};

export function useButton<T = Element>({ action, disabled, label }: ButtonProps<T>): Return<T> {
  const fireAction = (event: KeyboardEvent<T> | MouseEvent<T>) => {
    if (disabled) return;
    action(event);
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

  return {
    role: 'button',
    tabIndex: disabled ? undefined : 0,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    'aria-disabled': disabled,
    'aria-label': label,
  };
}
