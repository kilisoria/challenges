import React from 'react';
import renderer from 'react-test-renderer';

import ErrorPage from './ErrorPage';

describe('GIVEN ErrorPage component', () => {
  describe('WHEN renders by default', () => {
    it('THEN should match the snapshot', () => {
      const tree = renderer.create(<ErrorPage/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
