import { render, screen } from '@testing-library/react';
import App from './App';

// App fetches employees from the local json-server on mount; keep that request
// pending so the test runs offline and only checks the initial render.
vi.mock('axios', () => ({ default: () => new Promise(() => {}) }));

test('renders the loading state before employees are fetched', () => {
  render(<App />);
  const loading = screen.getByText(/loading data/i);
  expect(loading).toBeInTheDocument();
});
