import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EventStatus from '@/components/ui/EventCard/EventStatus/EventStatus';

describe('EventStatus', () => {
    it('renders an EventStatus component', () => {
        render(<EventStatus status="CANCELLED" />);

        expect(screen.getByText('CANCELLED')).toBeInTheDocument();
    });
});
