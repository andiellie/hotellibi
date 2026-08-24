'use client'

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          HotelliBI Design System
        </h1>

        {/* Paleta de Colores */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Paleta de Colores
          </h2>

          {/* Primarios */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Colores Primarios (Azul)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => {
                const colors: { [key: number]: string } = {
                  50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
                  400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8',
                  800: '#1E40AF', 900: '#1E3A8A'
                }
                return (
                  <div key={shade} className="text-center">
                    <div
                      className="w-full h-24 rounded-lg shadow-md mb-2 border border-gray-200"
                      style={{ backgroundColor: colors[shade] }}
                    />
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                      {shade}
                    </p>
                    <p className="text-xs font-mono text-gray-500 dark:text-gray-500">
                      {colors[shade]}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Secundarios */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Colores Secundarios (Naranja)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {[
                { shade: 50, color: '#FFF7ED' },
                { shade: 100, color: '#FFEDD5' },
                { shade: 200, color: '#FED7AA' },
                { shade: 300, color: '#FDBA74' },
                { shade: 400, color: '#FB923C' },
                { shade: 500, color: '#F97316' },
                { shade: 600, color: '#EA580C' },
                { shade: 700, color: '#C2410C' },
                { shade: 800, color: '#FF6B5B' },
                { shade: 900, color: '#E84C3D' },
              ].map(({ shade, color }) => (
                <div key={shade} className="text-center">
                  <div
                    className="w-full h-24 rounded-lg shadow-md mb-2 border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                    {shade}
                  </p>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-500">
                    {color}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Funcionales */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Colores Funcionales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { name: 'Success', color: '#10B981' },
                { name: 'Error', color: '#EF4444' },
                { name: 'Warning', color: '#F59E0B' },
                { name: 'Info', color: '#0EA5E9' },
              ].map(({ name, color }) => (
                <div key={name} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div
                    className="w-full h-24 rounded-lg mb-3 border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
                  <p className="text-sm font-mono text-gray-600 dark:text-gray-400">{color}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Botones */}
        <section className="mb-16 bg-white dark:bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Componentes - Botones
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Primario</p>
              <button className="px-8 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition font-medium">
                Botón Principal
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Secundario</p>
              <button className="px-8 py-3 border-2 border-primary-800 text-primary-800 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition font-medium">
                Botón Secundario
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Texto</p>
              <button className="text-primary-800 dark:text-primary-400 hover:text-primary-900 font-medium transition">
                Botón de Texto
              </button>
            </div>
          </div>
        </section>

        {/* Tipografía */}
        <section className="mb-16 bg-white dark:bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tipografía
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">H1</p>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Título principal - 36px
              </h1>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">H2</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Título secundario - 30px
              </h2>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">H3</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Título terciario - 24px
              </h3>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Párrafo</p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Este es un párrafo de texto normal con tamaño 16px
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Pequeño</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Texto pequeño de 14px
              </p>
            </div>
          </div>
        </section>

        {/* Tarjetas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tarjetas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Tarjeta {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Descripción de la tarjeta con contenido importante
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Formularios */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Formularios
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Input de texto
              </label>
              <input
                type="text"
                placeholder="Placeholder de ejemplo"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Textarea
              </label>
              <textarea
                placeholder="Placeholder de ejemplo"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
