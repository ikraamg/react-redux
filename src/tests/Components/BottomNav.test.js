import React from 'react';
import { render } from '@testing-library/react';
import BottomNav from '../../Components/BottomNav';

test('renders bottomNav', () => {
  const { getByText } = render(<BottomNav />);
  const Text = getByText(/Like/i);
  expect(Text).toBeInTheDocument();
});
