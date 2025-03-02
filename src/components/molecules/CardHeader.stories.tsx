import type { Meta, StoryObj } from '@storybook/react';
import CardHeader from './CardHeader';

const meta: Meta<typeof CardHeader> = {
  title: 'Molecules/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardHeader>;

export const Default: Story = {
  args: {
    title: 'عنوان کارت',
    managerName: 'نام مدیر',
  },
};

export const WithoutManagerName: Story = {
  args: {
    title: 'عنوان کارت',
  },
};
