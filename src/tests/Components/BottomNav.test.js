import React from 'react';
import { render } from '@testing-library/react';
import BottomNav from '../../Components/BottomNav';

test('renders learn react link', () => {
  const { getByText } = render(<BottomNav />);
  const headerText = getByText(/Like/i);
  expect(headerText).toBeInTheDocument();
});
