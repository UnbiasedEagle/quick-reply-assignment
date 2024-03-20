import { useState } from 'react';
import { VerticalProgressStep } from '../../components/progress-step/vertical/VerticalProgressStep';
import { ProgressStep } from '../../types';

interface VerticalProgressStepsProps {
  steps: ProgressStep[];
}

export const VerticalProgressSteps = ({
  steps,
}: VerticalProgressStepsProps) => {
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
    <div>
      {progressSteps.map((step, idx) => {
        return (
          <VerticalProgressStep
            key={step.id}
            line={idx !== steps.length - 1}
            stepName={step.stepName}
            success={step.success}
            description={step.description}
            onClick={() => handleStepClick(step.id)}
          />
        );
      })}
    </div>
  );
};
