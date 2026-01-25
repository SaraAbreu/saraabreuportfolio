import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abreu Studio — Creative Strategy & Ethical Vision</title>
        <meta name="description" content="Abreu Studio — diseño web, automatizaciones y estrategia ética en IA. Proyectos, demos y consultoría." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
