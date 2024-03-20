import cn from 'classnames';

interface ProgressStepDescriptionProps {
  className?: string;
  description: string;
}

export const ProgressStepDescription = ({
  description,
  className,
}: ProgressStepDescriptionProps) => {
  const classNames = cn('text-[#8D8E8F] text-sm', className);

  return <p className={classNames}>{description}</p>;
};
