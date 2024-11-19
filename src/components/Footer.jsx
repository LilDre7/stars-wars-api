import { Link } from "react-router-dom";
import { socialMedia } from "../services/data";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-200 min-h-screen flex flex-col justify-center p-6 md:p-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-zinc-100">
            Join the
            <br />
            playground <span className="inline-block -rotate-12">☺</span>
          </h2>
          <button
            className="mt-8 md:mt-0 bg-emerald-500 hover:bg-emerald-600 text-black rounded-full h-32 w-32 md:h-40 md:w-40 font-medium"
            size="lg"
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            CALL ME
            <br />
            BACK
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {socialMedia.map((item, index) => (
            <Link
              href={item.href}
              target="_blank"
              key={index}
              className="text-lg hover:text-zinc-400 transition-colors"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">Starwars API.</h3>
          </div>
          <div className="space-y-2">
            <p>229 Playas del Coco</p>
            <p>75001 Sardinal</p>
          </div>
          <div className="space-y-2">
            <p>Guancaste, Liberia</p>
            <p>Costa Rica</p>
          </div>
          <div className="space-y-2">
            <Link
              href="mailto:hello@goodkidsagency.com"
              className="hover:text-zinc-400 transition-colors block"
            >
              alvaroaburto71@gmail.com
            </Link>
            <Link
              href="mailto:jobs@goodkidsagency.com"
              className="hover:text-zinc-400 transition-colors block"
            >
              Blessing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
