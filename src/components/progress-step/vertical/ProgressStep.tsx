import { Cell } from '../Cell';
import { ProgressStepLine } from '../ProgressLine';
import { ProgressStepDescription } from '../ProgressStepDescription';

interface VerticalProgressStepProps {
  success: boolean;
  description?: string;
  line: boolean;
  stepName: string;
}

export const VerticalProgressStep = ({
  success,
  description,
  line,
  stepName,
}: VerticalProgressStepProps) => {
  return (
    <div className='flex relative flex-col items-center'>
      <div className='my-1 relative'>
        <Cell type='line' number={stepName} success={success} />
        {description && (
          <ProgressStepDescription
            className='absolute w-64 text-left left-12'
            description={description}
          />
        )}
      </div>
      {line && <ProgressStepLine success={success} type='vertical' />}
    </div>
  );
};
