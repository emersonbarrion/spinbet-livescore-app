import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '@/components/ui/Filter/Filter';

describe('Filter', () => {
    it('renders a Filter component', () => {
        const countByStatus = {
            All: 6,
            Live: 4,
            Result: 12,
            Upcoming: 23,
        };
        render(
            <Filter selectedStatus="All" handleSelected={() => {}} countByStatus={countByStatus} />,
        );

        expect(screen.getByText('23')).toBeInTheDocument();
    });
});
