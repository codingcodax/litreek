import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

export const inputStyles = tv({
  base: cn(
    'h-10 rounded-lg border border-gray-700 bg-gray-100 px-4 transition-colors',
    'hover:border-gray-800',
    'disabled:bg-gray-200',
    'outline-indigo-800 focus:outline',
    'placeholder:text-gray-800'
  ),
  variants: {},
  defaultVariants: {},
});

type InputProps = React.ComponentPropsWithoutRef<'input'>;
type InputVariants = VariantProps<typeof inputStyles>;

export interface Props extends InputProps, InputVariants {}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={inputStyles({ class: className })}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
