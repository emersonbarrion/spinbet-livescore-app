import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorMessage from '@/components/ui/ErrorMessage/ErrorMessage';

describe('ErrorMessage', () => {
    it('renders a ErrorMessasge component', () => {
        render(<ErrorMessage message="This is an error message" />);

        expect(screen.getByText('This is an error message')).toBeInTheDocument();
    });
});
