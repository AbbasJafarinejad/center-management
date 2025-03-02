import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    color: 'blue',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    color: 'green',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    color: 'red',
  },
};
