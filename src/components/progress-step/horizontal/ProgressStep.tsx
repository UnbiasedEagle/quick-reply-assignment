import { Cell } from '../Cell';
import { ProgressStepLine } from '../ProgressLine';
import { ProgressStepDescription } from '../ProgressStepDescription';

interface HorizontalProgressStepProps {
  success: boolean;
  position: 'start' | 'middle' | 'end';
  stepName: string;
  description?: string;
}

export const HorizontalProgressStep = ({
  success,
  position,
  stepName,
  description,
}: HorizontalProgressStepProps) => {
  return (
    <div className='inline-flex items-center'>
      {position !== 'start' && (
        <ProgressStepLine type='horizontal' success={success} />
      )}

      <div className='mx-1 flex relative flex-col items-center'>
        <Cell type='number' number={stepName} success={success} />
        {description && (
          <ProgressStepDescription
            className='absolute -bottom-12'
            description={description}
          />
        )}
      </div>

      {position !== 'end' && (
        <ProgressStepLine type='horizontal' success={success} />
      )}
    </div>
  );
};
