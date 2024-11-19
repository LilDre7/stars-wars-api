import { Search } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-404 opacity-10 z-10 object-cover object-center absolute top-0 left-0 w-full h-full"></div>
      <div className="max-w-2xl w-full space-y-8 z-50">
        <div className="space-y-6">
          <p className="text-sm text-gray-400">404 error</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Under maintenance</h1>
          <p className="text-gray-400 max-w-lg">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved. Try searching our site:
          </p>
          <a
            href="/"
            className="mt-8 z-50 inline-block px-6 py-3 cursor-pointer bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition duration-200"
          >
            Volver al inicio
          </a>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search our site"
                className="w-full bg-gray-900 border-gray-800 text-white pl-10 pr-4 py-2 rounded-md"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button className="bg-violet-600 hover:bg-violet-700 text-white p-2 rounded">
              Search
            </button>
          </div>
        </div>

        <h1 className="text-9xl font-extrabold text-white text-center">404</h1>
      </div>
    </div>
  );
}
