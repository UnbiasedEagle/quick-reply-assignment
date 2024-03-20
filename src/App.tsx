import { HorizontalProgressStep } from './components/progress-step/horizontal/HorizontalProgressStep';
import { VerticalProgressStep } from './components/progress-step/vertical/VerticalProgressStep';

const App = () => {
  return (
    <div className='text-center p-4'>
      <h1 className='text-3xl font-bold'>QuickReply.ai Assignment</h1>
      <div className='flex flex-col gap-10 justify-center items-center mt-10'>
        <VerticalProgressStep
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
        />
      </div>
    </div>
  );
};

export default App;
