import { HorizontalProgressStep } from './components/progress-step/horizontal/HorizontalProgressStep';
import { VerticalProgressStep } from './components/progress-step/vertical/VerticalProgressStep';
import { HorizontalProgressSteps } from './examples/horizontal-progress-steps/HorizontalProgressSteps';
import { VerticalProgressSteps } from './examples/vertical-progress-steps/VerticalProgressSteps';
import { ProgressStep } from './types';

const progressSteps: ProgressStep[] = [
  {
    id: 1,
    stepName: '1',
    success: false,
    description: 'Passed',
  },
  {
    id: 2,
    stepName: '2',
    success: false,
    description: 'Current',
  },
  {
    id: 3,
    stepName: '3',
    success: false,
    description: 'Ahead',
  },
];

const App = () => {
  return (
    <div className='text-center p-4'>
      <h1 className='text-3xl font-bold'>QuickReply.ai Assignment</h1>
      <div className='flex flex-col gap-20 justify-center items-center mt-10'>
        {/* <VerticalProgressStep
          description='In vertical layout, the current step may have description'
          success={false}
          line={true}
          stepName='1'
        />
        <HorizontalProgressStep
          description='Description'
          position='middle'
          stepName='2'
          success={true}
        /> */}
        <HorizontalProgressSteps steps={progressSteps} />
        <VerticalProgressSteps steps={progressSteps} />
      </div>
    </div>
  );
};

export default App;
