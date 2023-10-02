import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from './HomePage';

xdescribe('GIVEN HomePage component', () => {
  describe('WHEN renders by default', () => {
    it('THEN should match the snapshot', () => {
      const tree = renderer.create(<HomePage />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
