"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Montserrat } from 'next/font/google';
import CALL_OF_DUTY_MOBILE from "@/public/call_of_duty_mobile.jpg";
import CLASH_OF_CLANS from "@/public/clash_of_clans.jpg";
import DOTA_2 from "@/public/dota_2.jpg";
import ROCKET_LEAGUE from "@/public/rocket_league.jpg";
import VALORANT from "@/public/valorant.jpg";
import FORTNITE from "@/public/fortnite.jpg";
import APEX_LEGENDS from "@/public/apex_legends.jpg";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const images = [
  { src: CALL_OF_DUTY_MOBILE, alt: "Call of Duty Mobile" },
  { src: CLASH_OF_CLANS, alt: "Clash of Clans" },
  { src: DOTA_2, alt: "Dota 2" },
  { src: ROCKET_LEAGUE, alt: "Rocket League" },
  { src: VALORANT, alt: "Valorant" },
  { src: FORTNITE, alt: "Fortnite" },
  { src: APEX_LEGENDS, alt: "Apex Legends" }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fadeIn");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fadeOut");
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeState("fadeIn");
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setFadeState("fadeOut");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFadeState("fadeIn");
    }, 500);
  };

  const prevImage = () => {
    setFadeState("fadeOut");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFadeState("fadeIn");
    }, 500);
  };

  const goToImage = (index: number) => {
    setFadeState("fadeOut");
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFadeState("fadeIn");
    }, 500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      
      {/* Header */}
      <header className="absolute top-6 left-6 right-6 z-20">
        <div className="mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div style={{"padding":"16px"}} className={`${montserrat.className} flex justify-center items-center text-center h-fit w-fit bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-md rounded-xl shadow-lg md:w-auto`}>
            <h1 className="text-white font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              NEXUS-WARS. La plataforma de torneos de videojuegos
            </h1>
          </div>
          
          <div className="flex gap-4 space-x-2 md:space-x-4 w-full md:w-auto justify-center">
            <button style={{"padding":"16px"}} className={`${montserrat.className} bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-xl px-6 py-2.5 text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 flex-1 md:flex-none justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Iniciar sesión
            </button>
            <button style={{"padding":"16px"}} className={`${montserrat.className} bg-gradient-to-br from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold rounded-xl px-6 py-2.5 text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 flex-1 md:flex-none justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Contenedor de imagen */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${fadeState === "fadeIn" ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      </div>

      {/* Contenedor unificado para nombre e indicadores */}
      <div className={`absolute ${isMobile ? 'bottom-4 left-4 right-4' : 'bottom-8 left-8 right-8'} z-10`}>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          {/* Nombre del juego */}
          <div style={{"padding":"16px"}} className={`${montserrat.className} bg-black/60 backdrop-blur-md rounded-xl ${
            isMobile ? 'p-3' : 'p-6'
          } shadow-lg border border-white/10`}>
            <h2 className={`text-white font-bold tracking-wide ${
              isMobile ? 'text-2xl px-4 py-2' : 'text-6xl px-8 py-4'
            }`}>
              {images[currentImageIndex].alt}
            </h2>
          </div>
          
          {/* Indicadores de posición */}
          <div className={`flex justify-center ${
            isMobile ? 'gap-2' : 'gap-3'
          }`}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`${
                  isMobile ? 'h-2 w-2' : 'h-3 w-3'
                } rounded-full transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'bg-white scale-125 shadow-sm' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controles de navegación */}
      <button 
        onClick={prevImage}
        className={`absolute ${
          isMobile ? 'left-4 p-3' : 'left-8 p-4'
        } top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl group border border-white/20`}
        aria-label="Imagen anterior"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`${isMobile ? 'h-5 w-5' : 'h-7 w-7'} text-white group-hover:scale-110 transition-transform`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextImage}
        className={`absolute ${
          isMobile ? 'right-4 p-3' : 'right-8 p-4'
        } top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl group border border-white/20`}
        aria-label="Siguiente imagen"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`${isMobile ? 'h-5 w-5' : 'h-7 w-7'} text-white group-hover:scale-110 transition-transform`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}