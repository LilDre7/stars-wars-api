import notFoundImage from "../assets/man.webp";

import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  gender: PropTypes.string,
  opening_crawl: PropTypes.string,
};

export default function Card({ name, image, gender, opening_crawl }) {
  return (
    <div className="relative bg-gradient-to-b hover:scale-95 from-neutral-800 to-black  overflow-hidden group hover:ring-1 hover:ring-white/20 transition-all flex sm:flex-col">
      {/* Contenedor de la imagen */}
      <div className="relative aspect-[5/3]">
        {/* Imagen con la capacidad de escalar al hacer hover */}
        <img
          src={image || notFoundImage}
          className="group-hover:scale-15 transition-transform duration-300"
          alt="Imagen representativa"
        />
        {/* Degradado de fondo para darle un efecto de profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
      </div>
      {/* Contenedor de la informaci n */}
      <div className="p-2 space-y-2">
        {/* Separador decorativo */}
        <div className="flex items-center gap-1">
          <div className="w-6 h-0.5 bg-white/50 rounded-full" />
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
        {/* Contenedor de la informaci n */}
        <div className="space-y-1">
          {/* Titulo */}
          <h3 className="font-bold text-sm leading-tight text-white group-hover:text-blue-400 transition-colors line-clamp-2">
            {name}
          </h3>
          {/*Generero */}
          <p className="text-xs text-gray-400 uppercase">
            {gender === "n/a" ? "Robot" : gender}
          </p>
          {/* Texto de apertura */}
          <p className="text-xs text-gray-400 uppercase py-2">
            {opening_crawl}
          </p>
        </div>
      </div>
      {/* Barra degradada en la parte inferior */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-red-700 to-red-900 absolute left-0 right-0 bottom-0" />
    </div>
  );
}
