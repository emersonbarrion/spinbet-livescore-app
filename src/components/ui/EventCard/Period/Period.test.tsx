import { render, screen } from '@testing-library/react';
import Period from '@/components/ui/EventCard/Period/Period';
import '@testing-library/jest-dom';

describe('Period', () => {
    it('renders a Period component', () => {
        render(<Period period="HT" status="LIVE" />);

        expect(screen.getByText('HT')).toBeInTheDocument();
    });
});
