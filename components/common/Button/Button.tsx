import ButtonStyles from './button.module.css';
import cn from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  type: string;
};

const Button = ({ children, type }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        {
          [ButtonStyles.success]: type === 'success',
          [ButtonStyles.error]: type === 'error',
        },
        'px-4',
        'py-2',
        'rounded-lg',
        'shadow-lg',
        'text-lg',
        'font-semibold',
        'tracking-wide'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
