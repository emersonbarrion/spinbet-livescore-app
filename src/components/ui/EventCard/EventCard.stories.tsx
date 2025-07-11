import EventCard from '@/components/ui/EventCard/EventCard';
import type { StoryObj } from '@storybook/nextjs-vite';

const meta = {
    title: 'Components/EventCard',
    component: EventCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PREMATCH: Story = {
    args: {
        event: {
            id: '1',
            countryName: 'RUSSIA',
            competitionName: 'Football National League',
            eventStatus: 'PREMATCH',
            score: '0 - 0',
            homeTeam: 'FK Tyumen',
            awayTeam: 'Lunch-Energiya',
            period: '',
            timestamp: 1470484800,
        },
    },
};

export const LIVE: Story = {
    args: {
        event: {
            id: '1',
            countryName: 'RUSSIA',
            competitionName: 'Football National League',
            eventStatus: 'LIVE',
            score: '2 - 0',
            homeTeam: 'FK Tyumen',
            awayTeam: 'Lunch-Energiya',
            period: "32'",
            timestamp: 1470484800,
        },
    },
};

export const ENDED: Story = {
    args: {
        event: {
            id: '1',
            countryName: 'RUSSIA',
            competitionName: 'Football National League',
            eventStatus: 'ENDED',
            score: '4 - 2',
            homeTeam: 'FK Tyumen',
            awayTeam: 'Lunch-Energiya',
            period: 'FT',
            timestamp: 1470484800,
        },
    },
};

export const CANCELLED: Story = {
    args: {
        event: {
            id: '1',
            countryName: 'RUSSIA',
            competitionName: 'Football National League',
            eventStatus: 'CANCELLED',
            score: '',
            homeTeam: 'FK Tyumen',
            awayTeam: 'Lunch-Energiya',
            period: '',
            timestamp: 1470484800,
        },
    },
};
