import type { Meta, StoryObj } from '@storybook/react';
import CardBody from './CardBody';

const meta: Meta<typeof CardBody> = {
  title: 'Molecules/CardBody',
  component: CardBody,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardBody>;

export const Default: Story = {
  args: {
    children: 'محتوای کارت',
  },
};
