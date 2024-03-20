import { progressSteps } from './data';
import { HorizontalProgressSteps } from './examples/horizontal-progress-steps/HorizontalProgressSteps';
import { VerticalProgressSteps } from './examples/vertical-progress-steps/VerticalProgressSteps';

const App = () => {
  return (
    <div className='p-4 text-center'>
      <h1 className='text-3xl font-bold'>QuickReply.ai Assignment</h1>
      <div className='flex flex-col items-center justify-center gap-20 mt-10'>
        <HorizontalProgressSteps steps={progressSteps} />
        <VerticalProgressSteps steps={progressSteps} />
      </div>
    </div>
  );
};

export default App;
