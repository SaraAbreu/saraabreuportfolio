import Head from 'next/head';

export default function Contacto() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <Head>
        <title>Contacto — Sara Abreu</title>
      </Head>
      <div className="glass-card flex flex-col md:flex-row items-center p-8 rounded-2xl shadow-lg max-w-3xl w-full gap-8">
        {/* Foto */}
        <div className="flex-shrink-0">
          <img
            src="/images/sara.jpg"
            alt="Sara Abreu"
            className="w-48 h-48 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
          />
        </div>
        {/* Datos de contacto */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold mb-2">Contacto</h1>
          <div className="space-y-2">
            <div>
              <span className="font-semibold text-cyan-400">Teléfono:</span> +34 664 771 752
            </div>
            <div>
              <span className="font-semibold text-cyan-400">Email:</span> <a href="mailto:saraabreu2c1997@gmail.com" className="underline hover:text-cyan-300">saraabreu2c1997@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold text-cyan-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/sara-abreu-hernandez/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">sara-abreu-hernandez</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
