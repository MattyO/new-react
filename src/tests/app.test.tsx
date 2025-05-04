import React from 'react';
import { render, screen } from '@testing-library/react';

import App from 'app';

it('render the app', () => {
  render(<App/>);
  const element = screen.getByText('Hello World<');

  expect(element).toBeInTheDocument();
});
