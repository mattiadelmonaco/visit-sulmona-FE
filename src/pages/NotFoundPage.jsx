export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="/images/sulmona-notte.jpg"
              alt="Foto Sulmona di notte"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="text-8xl text-center font-extrabold text-red-700 animate-pulse">
                404
              </h1>
              <div className="space-y-4">
                <h2 className="text-red-700 text-center font-bold text-5xl">
                  Pagina non trovata
                </h2>
                <p className="text-red-600 text-center font-semibold text-xl">
                  La pagina che hai cercato è inesistente o è stata rimossa!
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-700 rounded-lg hover:bg-red-800 transition duration-300 transform hover:scale-110"
              >
                Torna all'HomePage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
