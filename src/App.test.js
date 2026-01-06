import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rule visualizer header', () => {
  render(<App />);
  const heading = screen.getByText(/Rule Conditions/i);
  expect(heading).toBeInTheDocument();
});
