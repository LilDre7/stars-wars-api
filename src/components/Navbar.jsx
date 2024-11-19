import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Usamos React Router para la navegación
import { Search, Menu, X, User } from "lucide-react";
import { socialMedia, login, categories } from "../services/data";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate(); // Creamos el hook de navegación
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [category, setCategory] = useState(""); // Estado para la categoría seleccionada
  const [search, setSearch] = useState(""); // Estado para el valor de búsqueda

  // Función para obtener los datos según la categoría seleccionada
  const handleCategoryClick = async (category) => {
    setCategory(category);
    navigate(`/home?category=${category}`);
  };

  return (
    <header className="mx-auto px-4 bg-zinc-950 w-full border-b-2 border-white">
      {/* navbar all */}
      <nav className="mx-auto px-4">
        <section className="flex items-center justify-between py-3 border-b border-gray-800">
          {/* Contacto navbar */}
          <div className="hidden md:flex items-center gap-6">
            {socialMedia.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-white hover:text-red-500 text-sm font-bold hover:scale-125 transition-all"
              >
                <span className="w-6">{item.icon}</span>
              </Link>
            ))}
            <button className="text-white text-sm bg-transparent border-gray-600 hover:bg-red-500 hover:border-White border px-3 py-1 rounded-sm">
              CONTACT
            </button>
          </div>

          {/* Search navbar */}
          <div className="flex items-center gap-4">
            <div className="relative md:block">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
              <input
                type="text"
                placeholder={`Buscador ${category ? category : ""}...`}
                className="w-48 pl-8 h-8 border rounded-sm text-white bg-transparent border-gray-700 text-sm focus:ring-1 focus:ring-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Login navbar */}
            <div className="md:flex items-center gap-2 text-xs">
              {login.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-white hover:text-red-500 text-base font-bold hover:scale-105 transition-all"
                >
                  <span className="flex items-center gap-1">
                    {item.name}
                    <User className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Menu responsive */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </section>

        {/* logo navbar */}
        <section className="flex items-center justify-center py-4">
          <Link to="/" className="">
            <img src={logo} alt="Star Wars" className="h-32 md:h-32" />
          </Link>
        </section>

        {/* Categorias navbar barra de busqueda */}
        <section
          className={`${isMenuOpen ? "block" : "hidden"} md:block pb-4 text-sm`}
        >
          {/* Botones por categoría */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 border-t-2 border-gray-800">
            {categories.map(({ label, category }) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="text-white uppercase text-sm hover:text-white border-b-2 border-gray-800 focus:border-red-600 border-x-slate-100 hover:border-red-600 py-2 md:pb-2"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="sm:border-t-2 border-gray-800 mt-6">
            <p className="text-white text-base mt-4 text-center">
              WELCOME TO THE STAR WARS API 🚀
            </p>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
