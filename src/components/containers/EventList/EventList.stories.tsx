import type { StoryObj } from '@storybook/nextjs-vite';
import EventList from '@/components/containers/EventList/EventList';
import { generateEvents } from '@/services/event/event.utils';

const meta = {
    title: 'Components/EventList',
    component: EventList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {
    args: {
        events: generateEvents(10),
    },
};
