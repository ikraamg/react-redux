import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../../Components/SearchBar';

const dummyFunc = () => 'called';

test('renders searchBar', () => {
  const { getAllByText } = render(<SearchBar items={['Animals', 'Fish']} changeFilter={dummyFunc} />);
  const Text = getAllByText(/Filter Results/i);
  expect(Text[1]).toBeInTheDocument();
});
