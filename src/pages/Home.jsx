import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categoryMap } from "../services/api";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categories } from "../services/data";
import EditCreate from "../pages/EditCreate";

const Home = () => {
  const navigate = useNavigate(); // Creamos el hook de navegación
  const location = useLocation();

  const [category, setCategory] = useState(""); // Estado para la categoría seleccionada
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // Usamos useLocation para obtener la categoría desde la URL
  useEffect(() => {
    const categoryParam = new URLSearchParams(location.search).get("category");
    if (
      categoryParam &&
      categories.some((cat) => cat.category === categoryParam)
    ) {
      setCategory(categoryParam);
      fetchData(categoryParam);
    } else {
      // Redirigir a una categoría predeterminada o mostrar mensaje
      navigate("/home?category=edit");
    }
  }, [location.search, navigate]);

  // Función para obtener los datos según la categoría seleccionada
  const fetchData = async (category) => {
    if (category === setCategory) return;
    setLoading(true);
    try {
      const fetchFunction = categoryMap[category];
      if (fetchFunction) {
        const fetchedData = await fetchFunction();
        setData(fetchedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = async (category) => {
    setCategory(category);
    navigate(`/home?category=${category}`);
  };

  // Filtrar los datos según el valor de búsqueda
  const filteredData = search
    ? data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : data;

  return (
    <main>
      <Navbar />

      {/* Botones para seleccionar categoría, visibles solo en dispositivos móviles */}
      <div className="grid grid-cols-2 gap-4 py-6 px-4 m-4 md:hidden">
        {categories.map(({ label, category }) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            aria-label={`Seleccionar categoría: ${label}`}
            className="group relative uppercase inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
          >
            {label}
          </button>
        ))}
      </div>

      {category === "edit" ? (
        // Renderizar el componente de edición solo si la categoría es 'edit'
        <EditCreate />
      ) : (
        <section className="max-w-[1000px] mx-auto my-10">
          {/* Mostrar contenido principal solo si la categoría no es 'edit' */}
          {category && (
            <div className="px-4 mb-4">
              {/* Campo de búsqueda para filtrar elementos por categoría seleccionada */}
              <input
                type="text"
                placeholder={`Buscar ${category}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-zinc-90 text-black placeholder:text-zinc-400 px-4 py-3 rounded-lg pr-12 border border-zinc-700 shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
              />
            </div>
          )}

          {category && (
            <div>
              <div className="relative py-4 px-6 text-white my-4">
                {/* Título que indica la categoría de los datos mostrados */}
                <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-black via-gray-200 to-red-500 text-transparent bg-clip-text uppercase">
                  Mostrando datos de {category}
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black via-purple-700 to-red-500 shadow-lg shadow-blue-500/50"></div>
              </div>

              {loading ? (
                // Mensaje de carga mientras se obtienen los datos
                <div className="text-center m-4">Cargando...</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 sm:m-0">
                  {filteredData.length > 0 ? (
                    // Mostrar tarjetas con los datos filtrados
                    filteredData.map((item, index) => (
                      <Card
                        key={index}
                        name={item.name}
                        image={item.image}
                        gender={item.gender}
                        opening_crawl={item.opening_crawl}
                      />
                    ))
                  ) : (
                    // Mensaje si no se encuentran elementos
                    <div>No se encontraron elementos.</div>
                  )}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      <Footer />
    </main>
  );
};

export default Home;
