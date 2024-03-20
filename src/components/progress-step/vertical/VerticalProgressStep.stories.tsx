import { Meta, StoryObj } from '@storybook/react';
import { VerticalProgressStep } from './VerticalProgressStep';

const meta: Meta<typeof VerticalProgressStep> = {
  component: VerticalProgressStep,
  decorators: [
    (Story) => (
      <div className='flex items-center justify-center min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VerticalProgressStep>;

export const Default: Story = {
  args: {
    success: false,
    stepName: '1',
    line: true,
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
    description: 'In vertical layout, the current step may have description',
  },
};

export const NoLine: Story = {
  args: {
    ...Default.args,
    line: false,
  },
};

export const Line: Story = {
  args: {
    ...Default.args,
    line: true,
  },
};
