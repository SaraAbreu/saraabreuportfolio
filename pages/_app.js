import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-black/70 focus:text-white px-3 py-2 rounded-md">Ir al contenido</a>
      <Head>
        <title>Abreu Studio — Creative Strategy & Ethical Vision</title>
        <meta name="description" content="Abreu Studio — diseño web, automatizaciones y estrategia ética en IA. Proyectos, demos y consultoría." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Layout>
        <ThemeSwitcher />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
