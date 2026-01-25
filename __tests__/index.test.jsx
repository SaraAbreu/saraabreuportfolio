import React from 'react'
import { render, screen } from '@testing-library/react'

jest.mock('../components/HeroCanvas', () => () => <div data-testid="hero-canvas" />)

import Home from '../pages/index'

test('muestra el título del portafolio en la página principal', () => {
  render(<Home />)
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent(/Abreu Studio/i)
  expect(screen.getByText(/Creative Strategy & Ethical Vision/i)).toBeInTheDocument()
})
