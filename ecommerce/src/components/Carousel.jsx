import { useState, useEffect } from "react";

function Carousel() {
  const slides = [
    {
      image: "/img/img1.png",
      title: "PUMA Flat 30% Offer",
      subtitle: "Upgrade your wardrobe with the latest collection",
    },
    {
      image: "/img/img2.png",
      title: "Exclusive Footwear Collection",
      subtitle: "Get the best deals on top brands",
    },
    {
      image: "/img/img3.png",
      title: "Luxury Watches Collection",
      subtitle: "Stylish and premium designs for all occasions",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] overflow-hidden shadow-xl">


      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="banner"
            className="w-full h-full object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-gray-200 text-lg mt-2">{slide.subtitle}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
