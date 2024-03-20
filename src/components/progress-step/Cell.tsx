import cn from 'classnames';
import { Check } from '@phosphor-icons/react';

interface CellProps {
  type: 'number' | 'line';
  success: boolean;
  number: string;
}

export const Cell = ({ success, number, type }: CellProps) => {
  const cellClassNames = cn(
    'flex items-center justify-center h-7 w-7 rounded-full text-white',
    {
      'bg-success': success,
      'bg-neutral': !success,
    }
  );

  const stepClassNames = cn('absolute', {
    'text-success font-semibold': success,
    'text-[#5B5B5C]': !success,
    '-bottom-7': type === 'number',
    '-right-12': type === 'line',
  });

  return (
    <div className='flex relative flex-col items-center'>
      <div className={cellClassNames}>
        {success ? (
          <Check className='text-base' />
        ) : (
          <span className='text-sm'>{number}</span>
        )}
      </div>
      <span className={stepClassNames}>Step</span>
    </div>
  );
};
