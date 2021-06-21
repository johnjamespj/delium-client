import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello world on div', () => {
  render(<App />);
  const divElement = screen.getByText(/Hello world!/i);
  expect(divElement).toBeInTheDocument();
});
