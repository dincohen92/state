import { render, screen } from '@testing-library/react';
import App from './App';

test('renders STATE Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/STATE/i);
  expect(linkElement).toBeInTheDocument();
});
