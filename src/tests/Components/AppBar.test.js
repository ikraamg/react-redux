import React from 'react';
import { render } from '@testing-library/react';
import AppBar from '../../Components/AppBar';

test('Renders Title on AppBar', () => {
  const { getByText } = render(<AppBar />);
  const Text = getByText(/API Explorer/i);
  expect(Text).toBeInTheDocument();
});
