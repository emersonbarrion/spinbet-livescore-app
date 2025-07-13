import type { StoryObj } from '@storybook/nextjs-vite';
import Header from '@/components/ui/Header/Header';

const meta = {
    title: 'Components/Header',
    component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {
    args: {
        children: (
            <div style={{ backgroundColor: '#595959', height: '100px', color: 'white' }}>
                Header children
            </div>
        ),
    },
};
