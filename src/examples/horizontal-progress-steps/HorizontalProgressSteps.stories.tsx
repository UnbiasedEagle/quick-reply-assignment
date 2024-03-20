import { Meta, StoryObj } from '@storybook/react';
import { HorizontalProgressSteps } from './HorizontalProgressSteps';

const meta: Meta<typeof HorizontalProgressSteps> = {
  component: HorizontalProgressSteps,
  decorators: [
    (Story) => (
      <div className='flex items-center justify-center min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HorizontalProgressSteps>;

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
