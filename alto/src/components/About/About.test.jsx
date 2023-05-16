import { render, screen } from '@testing-library/react';
import About from './About';

test('render the About component', async () => {
    render(<About />);

    const avatar = screen.getByRole('img', { src: '/avatar.jpg' });
    expect(avatar).toBeInTheDocument();
});

