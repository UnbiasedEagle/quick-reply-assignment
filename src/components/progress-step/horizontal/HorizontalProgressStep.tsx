import { useState } from 'react';
import { Cell } from '../Cell';
import { ProgressStepLine } from '../ProgressLine';
import { ProgressStepDescription } from '../ProgressStepDescription';

interface HorizontalProgressStepProps {
  success: boolean;
  position: 'start' | 'middle' | 'end';
  stepName: string;
  description?: string;
  onClick: () => void;
}

export const HorizontalProgressStep = ({
  success,
  position,
  stepName,
  description,
  onClick,
}: HorizontalProgressStepProps) => {
  return (
    <div className='inline-flex items-center'>
      {position !== 'start' && (
        <ProgressStepLine type='horizontal' success={success} />
      )}

      <div className='mx-1 flex relative flex-col items-center'>
        <Cell
          onClick={onClick}
          type='number'
          number={stepName}
          success={success}
        />
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
