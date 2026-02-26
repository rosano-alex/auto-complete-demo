// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppTitle from '../AppTitle';

describe('AppTitle', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the title image with correct alt text and src', () => {
    render(<AppTitle />);
    const img = screen.getByAltText(/App Title/i) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('app-title');
  });
});
