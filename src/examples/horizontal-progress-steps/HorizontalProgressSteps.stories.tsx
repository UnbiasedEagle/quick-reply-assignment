import { Meta, StoryObj } from '@storybook/react';
import { HorizontalProgressSteps } from './HorizontalProgressSteps';
import { progressSteps } from '../../data';

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
    steps: progressSteps,
  },
};
