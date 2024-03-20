import { useState } from 'react';
import { HorizontalProgressStep } from '../../components/progress-step/horizontal/HorizontalProgressStep';
import { ProgressStep } from '../../types';

interface HorizontalProgressStepsProps {
  steps: ProgressStep[];
}

export const HorizontalProgressSteps = ({
  steps,
}: HorizontalProgressStepsProps) => {
  const [progressSteps, setProgressSteps] = useState(steps);

  const handleStepClick = (id: number) => {
    setProgressSteps((prevSteps) => {
      return prevSteps.map((step) => {
        return step.id === id
          ? { ...step, success: !step.success }
          : { ...step };
      });
    });
  };

  return (
    <div className='flex items-center'>
      {progressSteps.map((step, idx) => {
        const position: 'start' | 'middle' | 'end' =
          idx === 0 ? 'start' : idx === steps.length - 1 ? 'end' : 'middle';

        const props = {
          ...step,
          position,
        };

        return (
          <HorizontalProgressStep
            onClick={() => handleStepClick(step.id)}
            key={step.id}
            {...props}
          />
        );
      })}
    </div>
  );
};
