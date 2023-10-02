import React from 'react';
import renderer from 'react-test-renderer';

import TableHeader from './TableHeader';

describe('GIVEN TableHeader component', () => {
  describe('WHEN renders by default', () => {
    it('THEN should match the snapshot', () => {
      const tree = renderer.create(<TableHeader
        order="asc"
        orderBy="name"
        rowCount={10}
        classes={{}}
        numSelected={1}
        onRequestSort={() => { }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});