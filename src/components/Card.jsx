import notFound from "../assets/404.jpg";

import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  gender: PropTypes.string,
  opening_crawl: PropTypes.string,
};

export default function Card({ name, image, gender, opening_crawl }) {
  const hasImage = image ? image : notFound;

  return (
    <div className="relative bg-gradient-to-b hover:scale-95 from-neutral-800 to-black  overflow-hidden group hover:ring-1 hover:ring-white/20 transition-all flex sm:flex-col ">
      <div className="relative aspect-[5/3]">
        <img
          src={hasImage}
          className="group-hover:scale-15 transition-transform duration-300"
          alt="Image not found"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center gap-1">
          <div className="w-6 h-0.5 bg-white/50 rounded-full" />
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-sm leading-tight text-white group-hover:text-blue-400 transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-xs text-gray-400 uppercase">
            {gender === "n/a" ? "Robot" : gender}
          </p>
          <p className="text-xs text-gray-400 uppercase py-2">
            {opening_crawl}
          </p>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-red-500 via-red-700 to-red-900 absolute left-0 right-0 bottom-0" />
    </div>
  );
}
