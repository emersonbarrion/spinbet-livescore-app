import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/containers/Header/Header';

describe('Header', () => {
    it('renders a Header component', () => {
        render(<Header>This is the content header</Header>);

        expect(document.querySelector('.menu')).toBeInTheDocument();
    });
});
