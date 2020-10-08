import React from 'react';
import { render } from '@testing-library/react';
import AppBar from '../../Components/AppBar';

test('Renders Title on AppBar', () => {
  const { getByText } = render(<AppBar />);
  const headerText = getByText(/API Explorer/i);
  expect(headerText).toBeInTheDocument();
});
