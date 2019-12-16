import React from 'react';
import { render } from '@testing-library/react';
import PeopleApp from './PeopleApp';

test('renders learn react link', () => {
  const { getByText } = render(<PeopleApp />);
});
