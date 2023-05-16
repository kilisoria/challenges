import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('render the Landing component', async () => {
    const postsMocked = {
    };
    render(<Landing posts={postsMocked} />);

    const imgs = screen.getAllByRole('img');
    expect(imgs.length).toBe(4);
});
