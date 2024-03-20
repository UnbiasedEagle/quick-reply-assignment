import { Meta, StoryObj } from '@storybook/react';
import { VerticalProgressSteps } from './VerticalProgressSteps';
import { progressSteps } from '../../data';

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
    steps: progressSteps,
  },
};
