import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos
import "swiper/css/navigation"; // Estilos de navegación
import "swiper/css/pagination"; // Estilos de paginación
import "swiper/css/autoplay";
import slide1 from "../assets/slide4.jpg";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide1.webp";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Slider = () => {
  const slides = [
    { id: 1, imageUrl: slide1 },
    { id: 2, imageUrl: slide2 },
    { id: 3, imageUrl: slide3 },
    { id: 4, imageUrl: slide4 },
  ];

  return (
    <section className="">
      <div className="bg-bg-slider absolute w-full h-full z-[-1] opacity-40 "></div>
      <div className=" max-w-screen-lg mx-auto p-10 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={10} // Espacio entre slides
          slidesPerView={1} // Por defecto, un slide visible
          autoplay={{
            delay: 1000, // Tiempo entre deslizamientos (en milisegundos)
            disableOnInteraction: false, // Continúa después de interactuar con el slider
          }}
          loop={true} // Reproducción infinita
          className="rounded-xl shadow-lg overflow-hidden"
          breakpoints={{
            640: { slidesPerView: 1 }, // Móvil: 1 slide visible
            768: { slidesPerView: 1 }, // Tablets: 2 slides visibles
            1024: { slidesPerView: 1 }, // Escritorio: 3 slides visibles
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-64 md:max-h-80 lg:h-[30rem]">
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
