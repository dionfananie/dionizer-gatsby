import React from 'react';
import renderer from 'react-test-renderer';
import Banner from '../Banner';

describe('Banner', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Banner title="Collaborate" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
