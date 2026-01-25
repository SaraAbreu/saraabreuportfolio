import React from 'react'
import { render, screen } from '@testing-library/react'

jest.mock('../components/HeroCanvas', () => () => <div data-testid="hero-canvas" />)

import Home from '../pages/index'

test('navegación: botones principales y CTA están presentes', () => {
  render(<Home />)

  // heading existe
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toBeInTheDocument()

  // botones con role=button
  const buttons = screen.getAllByRole('button')
  expect(buttons.length).toBeGreaterThanOrEqual(4)

  // CTA Contactar
  const contact = screen.getByText(/Contactar/i)
  expect(contact).toBeInTheDocument()
  expect(contact.closest('a')).toHaveAttribute('href', expect.stringContaining('mailto:'))
})
