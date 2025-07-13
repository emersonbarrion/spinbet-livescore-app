import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EventList from '@/components/features/EventList/EventList';
import { generateEvents } from '@/services/event/event.utils';

describe('EventList', () => {
    const events = generateEvents(2);

    it('renders a list of EventCard components', () => {
        render(<EventList events={events} />);

        events.forEach((event) => {
            expect(screen.getByText(event.score)).toBeInTheDocument();
        });
    });

    it('has the correct class name', () => {
        render(<EventList events={events} />);
        expect(document.querySelector('.event-list')).toBeInTheDocument();
    });
});
