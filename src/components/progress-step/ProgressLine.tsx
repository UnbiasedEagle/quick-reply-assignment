import cn from 'classnames';

interface ProgressStepLineProps {
  type: 'horizontal' | 'vertical';
  success: boolean;
}

export const ProgressStepLine = ({ success, type }: ProgressStepLineProps) => {
  const classNames = cn({
    'h-px w-10': type === 'horizontal',
    'w-px h-12': type === 'vertical',
    'bg-success': success,
    'bg-neutral': !success,
  });

  return <div className={classNames} />;
};
