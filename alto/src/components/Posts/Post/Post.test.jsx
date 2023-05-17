import { render, screen } from "@testing-library/react";

import Post from "./Post";

test('render the Post Component', () => {
    render(<Post />);

    const texts = screen.getAllByRole('textbox');
    expect(texts.length).toBe(4);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
});