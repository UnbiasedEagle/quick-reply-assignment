import { Meta, StoryObj } from '@storybook/react';
import { HorizontalProgressStep } from './HorizontalProgressStep';
import { fn } from '@storybook/test';

const meta: Meta<typeof HorizontalProgressStep> = {
  component: HorizontalProgressStep,
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div className='flex items-center justify-center min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HorizontalProgressStep>;

export const Default: Story = {
  args: {
    success: false,
    position: 'middle',
    stepName: '1',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    success: true,
  },
};

export const NoDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};

export const Description: Story = {
  args: {
    ...Default.args,
    description: 'Current',
  },
};
