import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: () => ({ asPath: '/galeria', pathname: '/galeria', push: jest.fn() })
}));

import Home from '../pages/index';
import GaleriaHall from '../pages/galeria/index';
import { SALAS } from '../data/galeria';

describe('Home', () => {
  test('muestra el titular principal', async () => {
    render(<Home />);
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Construyo lo que/i);
  });

  test('el nav enlaza a la galería y el CTA abre el email', async () => {
    render(<Home />);
    const galeria = await screen.findAllByRole('link', { name: /^Galería$/i });
    expect(galeria[0]).toHaveAttribute('href', '/galeria');
    expect(screen.getByRole('link', { name: /Hablemos/i })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:')
    );
  });

  test('incluye Qubia Craft y la franja de fotografía', async () => {
    render(<Home />);
    expect(await screen.findByText('Qubia Craft')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Entrar a la galería/i })).toHaveAttribute(
      'href',
      '/galeria'
    );
  });
});

describe('Galería', () => {
  test('el recorrido enlaza a cada sala y a la artista', () => {
    render(<GaleriaHall />);
    SALAS.forEach((s) => {
      expect(
        screen.getAllByRole('link').some((a) => a.getAttribute('href') === `/galeria/${s.slug}`)
      ).toBe(true);
    });
    expect(
      screen.getAllByRole('link').some((a) => a.getAttribute('href') === '/galeria/la-artista')
    ).toBe(true);
  });

  test('todas las fotos tienen texto alternativo', () => {
    SALAS.flatMap((s) => s.fotos).forEach((f) => {
      expect(f.alt.length).toBeGreaterThan(10);
    });
  });
});
