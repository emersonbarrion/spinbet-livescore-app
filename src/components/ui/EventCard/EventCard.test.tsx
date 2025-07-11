import { render, screen } from '@testing-library/react';
import EventCard from '@/components/ui/EventCard/EventCard';
import '@testing-library/jest-dom';

describe('EventCard', () => {
    const event = {
        id: '1',
        countryName: 'Country A',
        competitionName: 'Competition A',
        eventStatus: 'LIVE',
        score: '1 - 0',
        homeTeam: 'Team A',
        awayTeam: 'Team B',
        period: 'FT',
        timestamp: 1470484800,
    };

    it('renders an EventCard component', () => {
        render(<EventCard event={event} />);

        expect(screen.getByText('Competition A')).toBeInTheDocument();
    });

    it('has internal class names', () => {
        render(<EventCard event={event} />);
        expect(document.querySelector('.segment')).toBeInTheDocument();
        expect(document.querySelector('.event-name')).toBeInTheDocument();
    });
});
