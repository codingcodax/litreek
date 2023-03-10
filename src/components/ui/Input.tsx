import { forwardRef, type ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

type InputProps = ComponentProps<'input'>;

export const inputStyles = tv({
  base: cn(
    'h-10 rounded-lg border border-gray-700 px-4 transition-colors',
    'hover:border-gray-800',
    'outline-indigo-800 focus:outline',
    'placeholder:text-gray-800'
  ),
  variants: {},
  defaultVariants: {},
});

type InputVariants = VariantProps<typeof inputStyles>;

export interface Props extends InputProps, InputVariants { }

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={inputStyles({ class: className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
