import type { Meta, StoryObj } from '@storybook/react';
import CenterCard from './CenterCard';

const meta: Meta<typeof CenterCard> = {
  title: 'Organisms/CenterCard',
  component: CenterCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CenterCard>;

export const Default: Story = {
  args: {
  
  },
};
