import { render, screen } from '@testing-library/react';
import Posts from './Posts';

test('render the Posts component', async () => {
    const postsMocked = {
    };
    render(<Posts posts={[]} />);

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
});
