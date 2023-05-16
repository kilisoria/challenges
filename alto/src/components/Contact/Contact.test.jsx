import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('render the Contact component', async () => {
    render(<Contact />);

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();

    const inputTexts = screen.getAllByRole('textbox');
    expect(inputTexts.length).toBe(4);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});
