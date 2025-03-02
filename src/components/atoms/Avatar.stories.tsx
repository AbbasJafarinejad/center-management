import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/avatar.jpg',
    className: '',
  },
};

export const WithCustomClass: Story = {
  args: {
    src: '/avatar.jpg',
    className: 'border-2 border-blue-500',
  },
};
