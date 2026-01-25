import React from 'react'
import { render, screen } from '@testing-library/react'

jest.mock('../components/HeroCanvas', () => () => <div data-testid="hero-canvas" />)

import Home from '../pages/index'

test('muestra el título del portafolio en la página principal', () => {
  render(<Home />)
  expect(screen.getByText(/Portafolio — Web \+ IA/i)).toBeInTheDocument()
})
