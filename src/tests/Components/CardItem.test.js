import React from 'react';
import { render } from '@testing-library/react';
import CardItem from '../../Components/CardItem';

test('renders passed prop', () => {
  const { getByText } = render(<CardItem title="Animals" gif="testGif" />);
  const Text = getByText(/Animals/i);
  expect(Text).toBeInTheDocument();
});
