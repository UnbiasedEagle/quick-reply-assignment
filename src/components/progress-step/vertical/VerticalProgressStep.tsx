import { Cell } from '../Cell';
import { ProgressStepLine } from '../ProgressLine';
import { ProgressStepDescription } from '../ProgressStepDescription';

interface VerticalProgressStepProps {
  success: boolean;
  description?: string;
  line: boolean;
  stepName: string;
  onClick: () => void;
}

export const VerticalProgressStep = ({
  success,
  description,
  line,
  stepName,
  onClick,
}: VerticalProgressStepProps) => {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='relative my-1'>
        <Cell
          onClick={onClick}
          type='line'
          number={stepName}
          success={success}
        />
        {description && (
          <ProgressStepDescription
            className='absolute w-64 text-left left-11'
            description={description}
          />
        )}
      </div>
      {line && <ProgressStepLine success={success} type='vertical' />}
    </div>
  );
};
