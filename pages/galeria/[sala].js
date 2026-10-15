import { useCallback, useMemo, useRef, useState } from 'react';
import GaleriaLayout from '../../components/galeria/GaleriaLayout';
import Pasillo from '../../components/galeria/Pasillo';
import Inmersion from '../../components/galeria/Inmersion';
import { SALAS, getSala } from '../../data/galeria';

// Agrupa las fotos de la sala en alas (una por categoría) y numera las obras.
function montarAlas(sala) {
  const grupos = sala.categorias?.length
    ? sala.categorias.map((c) => ({
        id: c.id,
        label: c.label,
        texto: c.texto,
        antes: c.antes,
        serie: `Serie ${c.label}`,
        fotos: sala.fotos.filter((f) => f.categoria === c.id)
      }))
    : [{ id: sala.slug, label: sala.titulo, texto: null, antes: sala.inicio, serie: sala.titulo, fotos: sala.fotos }];

  let n = 0;
  return grupos
    .filter((g) => g.fotos.length)
    .map((g) => ({ ...g, obras: g.fotos.map((foto) => ({ foto, serie: g.serie, indice: n++ })) }));
}

export default function Sala({ sala, siguiente }) {
  const alas = useMemo(() => montarAlas(sala), [sala]);
  const obras = useMemo(() => alas.flatMap((a) => a.obras), [alas]);
  const obraRefs = useRef([]);
  const [abierta, setAbierta] = useState(null); // { inicio, origen }
  const [actual, setActual] = useState(null);

  const getRect = useCallback((i) => obraRefs.current[i]?.getBoundingClientRect(), []);

  const abrir = (i) => {
    setAbierta({ inicio: i, origen: getRect(i) });
    setActual(i);
  };

  // Al pasar de obra dentro de la inmersión, la sala "camina" por detrás
  // para que al volver aparezcas delante del cuadro que estabas mirando.
  const alCambiar = useCallback((i) => {
    setActual(i);
    const el = obraRefs.current[i];
    const seccion = el?.closest('section');
    if (!el || !seccion) return;
    const r = el.getBoundingClientRect();
    if (r.left >= 0 && r.right <= window.innerWidth) return; // ya está a la vista
    const top = seccion.getBoundingClientRect().top + window.scrollY;
    const xActual = -(window.scrollY - top);
    const enPista = r.left - xActual;
    const destino = top + enPista - (window.innerWidth - r.width) / 2;
    const max = top + seccion.offsetHeight - window.innerHeight;
    window.scrollTo({ top: Math.max(top, Math.min(max, destino)), behavior: 'instant' });
  }, []);

  return (
    <GaleriaLayout title={`Sala ${sala.numero} · ${sala.titulo}`} description={sala.intro}>
      <Pasillo
        sala={sala}
        alas={alas}
        siguiente={siguiente}
        obraRefs={obraRefs}
        oculta={abierta ? actual : null}
        onOpen={abrir}
      />

      {abierta && (
        <Inmersion
          obras={obras}
          inicio={abierta.inicio}
          origen={abierta.origen}
          getRect={getRect}
          onIndex={alCambiar}
          onClose={() => {
            setAbierta(null);
            setActual(null);
          }}
        />
      )}
    </GaleriaLayout>
  );
}

export function getStaticPaths() {
  return { paths: SALAS.map((s) => ({ params: { sala: s.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const sala = getSala(params.sala);
  const i = SALAS.indexOf(sala);
  const next = SALAS[i + 1];
  const siguiente = next
    ? { href: `/galeria/${next.slug}`, titulo: next.titulo }
    : { href: '/galeria/la-artista', titulo: 'La artista' };
  return { props: { sala, siguiente } };
}
