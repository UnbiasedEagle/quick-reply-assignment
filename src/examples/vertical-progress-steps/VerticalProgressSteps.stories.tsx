import { Meta, StoryObj } from '@storybook/react';
import { VerticalProgressSteps } from './VerticalProgressSteps';

const meta: Meta<typeof VerticalProgressSteps> = {
  component: VerticalProgressSteps,
  decorators: [
    (Story) => (
      <div className='flex items-center justify-center min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VerticalProgressSteps>;

export const Default: Story = {
  args: {
    steps: [
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
    ],
  },
};
