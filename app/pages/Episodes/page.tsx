"use client"

import Image from "next/image"
import pageElm1 from "@/public/Images/page-elm-1.png"
import pageElm2 from "@/public/Images/page-elm-2.png"
import pageElm3 from "@/public/Images/page-elm-3.png"
import pageElm4 from "@/public/Images/page-elm-4.png"

import brand2 from "@/public/Images/brand-icon-1.png"
import brand1 from "@/public/Images/brand-icon-2.png"
import brand3 from "@/public/Images/brand-icon-3.png"
import brand4 from "@/public/Images/brand-icon-4.png"
import brand5 from "@/public/Images/brand-icon-5.png"
import InputPill from "@/app/Components/InputPill/InputPill"
import EpisodesData from "@/app/JsonData/EpisodesData.json"
import Link from "next/link"
import toast from "react-hot-toast"
import { useMemo, useState, useEffect } from "react"
import Button from "@/app/Components/Button/Button"
import rocketIcon from "@/public/Images/rocket-icon.png"
import pageBanner1 from "@/public/Images/Page-banner-1.png"
import pageBanner2 from "@/public/Images/Page-banner-2.png"


type Episode = {
  id: number;
  image: string;
  name: string;
  time: string;
  title: string;
  pere: string;
  episode: string;
}

const page = () => {

  const [showAll, setShowAll] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredEpisodes = EpisodesData.filter((episode: Episode) => {
    return (
      episode.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      episode.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      episode.episode.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  });

  const visibleEpisodes = showAll ? filteredEpisodes : filteredEpisodes.slice(0, 10); // Si showAll es true se muestran todos los episodios que pasaron el filtro de búsqueda, si es false se muestran los primeros 10 episodios que pasaron el filtro de búsqueda.

  const [sortBy, setSortBy] = useState<string>('default');

  // Optimizamos el ordenado con useMemo
  const sortedEpisodes = useMemo(() => {
    const list = [...visibleEpisodes]; // Clonamos para no mutar el original

    const strategies: Record<string, (a: Episode, b: Episode) => number> = {
      high: (a, b) => b.id - a.id,
      low: (a, b) => a.id - b.id,
      title: (a, b) => a.title.localeCompare(b.title),
    };

    return strategies[sortBy] ? list.sort(strategies[sortBy]) : list;
  }, [visibleEpisodes, sortBy]);

  const [mounted, setMounted] = useState(false);
  const [favorites, setFavorites] = useState<Episode[]>([]);

  // 1. Cargar datos de localStorage después del primer render (montaje)
  useEffect(() => {
    const stored = localStorage.getItem("favoriteEpisodes");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
    setMounted(true); // Ya estamos en el cliente y hemos cargado los datos
  }, []);

  // 2. Persistencia automática: solo guardar si ya hemos montado para no borrar datos al inicio
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("favoriteEpisodes", JSON.stringify(favorites));
    }
  }, [favorites, mounted]);

  const toggleFavorite = (episode: Episode) => {
    const isFav = favorites.some((fav) => fav.id === episode.id);          // Verifica si el episodio ya está en favoritos
    if (isFav) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== episode.id)); // Si está en favoritos, lo elimina
      toast.success(`'${episode.title}' eliminado de favoritos`, {
        icon: '🗑️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      setFavorites((prev) => [...prev, episode]);                          // Si no está en favoritos, lo agrega
      toast.success(`'${episode.title}' añadido a favoritos`, {
        icon: '❤️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav: Episode) => fav.id === id)
  }


  return (
    <>
      {/* Page Section */}
      <div className="page-section">
        <Image src={pageElm2} alt="Element" className="elm2 element" />
        <Image src={pageElm3} alt="Element" className="elm3 element" />
        <Image src={pageElm4} alt="Element" className="elm4 element" />

        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={pageElm1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8xl font-semibold justify-center my-6">
            All <span className="text-prim">Episodes</span>
          </h1>

          <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
            <Image src={brand1} alt="Brand" />
            <Image src={brand2} alt="Brand" />
            <Image src={brand3} alt="Brand" />
            <Image src={brand4} alt="Brand" />
            <Image src={brand5} alt="Brand" />
          </div>
        </div>
      </div>

      {/* Episodes */}
      <div className="dark-section relative">
        {/* Solo el buscador flota en la línea divisoria */}
        <div className="episode-search">
          <InputPill
            placeholder="Search Episode..."
            buttonText="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            primaryColor="var(--prim)"
            secondColor="var(--second)"
            buttonIcon={<span><i className="bi bi-arrow-right-short"></i></span>}
            containerClassName="bg-gray border-gray-700 shadow-xl"
            inputClassName="bg-gray text-white placeholder:text-white-400"
            onButtonClick={() => console.log('Clicked!')}
          />
        </div>

        {/* El contenido de abajo va en su propio contenedor con padding suficiente */}
        <div className="px-[8%] lg:px-[16%] pt-32 pb-20">
          <div className="flex justify-between items-center gap-5 p-2 mb-10">
            <h2 className="text-xl font-medium">
              Total Episodes Available ( {visibleEpisodes.length} )
            </h2>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray text-prim px-8 py-3 pr-12 rounded-full outline-none cursor-pointer font-medium hover:bg-gray-light transition-all duration-300"
              >
                <option value="default">Sort By</option>
                <option value="high">Episode: High to Low</option>
                <option value="low">Episode: Low to High</option>
                <option value="title">Title: A to Z</option>
              </select>

              <i className="bi bi-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-prim pointer-events-none"></i>
            </div>
          </div>

          {/* Episodes not found */}
          {searchTerm && sortedEpisodes.length === 0 && (
            <div className="w-full text-center my-12">
              <h2 className="text-3xl text-gray-400 border-t border-b border-red-400 py-10">
                '{searchTerm}' Episode Not Found
              </h2>
            </div>
          )}

          {/* Episodes List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedEpisodes.map((episode: Episode, index) => (
              <div key={index} className="flex flex-col lg:flex-row bg-gray-light rounded-2xl p-4 lg:p-6 overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-lg gap-4">

                {/* Columna de la Imagen (40% de ancho en desktop) */}
                <div className="w-full lg:w-[40%] shrink-0">
                  <Image
                    src={episode.image}
                    alt={episode.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl aspect-4/3 lg:aspect-auto"
                  />
                </div>

                {/* Columna de Información (60% de ancho en desktop) */}
                <div className="w-full lg:w-[60%] flex flex-col justify-between">
                  <div className="p-2 lg:p-4">
                    <div className="flex flex-row justify-between items-start mb-4">
                      <Link href={`/pages/Episodes/${episode.id}`}>
                        <p className="font-light text-gray-200 hover:text-prim tracking-wide transition-all duration-200 text-sm">
                          <i className="bi bi-mic text-prim mr-1"></i>
                          {episode.name}
                        </p>
                      </Link>

                      <div className="flex items-center gap-3">
                        <h2 className="text-gray-300 text-sm">
                          <i className="bi bi-clock mr-1 text-prim"></i>
                          {episode.time}
                        </h2>
                        <i
                          onClick={() => toggleFavorite(episode)}
                          className={`bi cursor-pointer text-xl ${isFavorite(episode.id)
                            ? 'bi-heart-fill text-red-500'
                            : 'bi-heart text-gray-400 hover:text-white'
                            } transition-colors duration-200`}
                        ></i>
                      </div>
                    </div>

                    <Link href={`/pages/Episodes/${episode.id}`}>
                      <h2 className="text-2xl lg:text-3xl font-bold hover:text-prim transition-all duration-200 line-clamp-1">
                        {episode.title}
                      </h2>
                      <p className="my-3 text-gray-400 text-sm lg:text-base line-clamp-2">
                        {episode.pere}
                      </p>
                    </Link>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      {/* Botón Listen Now */}
                      <Link href={`/pages/Episodes/${episode.id}`} className="inline-flex items-center group">
                        <i className="bi bi-play-fill w-10 h-10 lg:w-12 lg:h-12 bg-prim text-black text-xl lg:text-2xl group-hover:bg-second group-hover:text-white rounded-full flex items-center justify-center transition-all duration-300"></i>
                        <span className="text-base lg:text-lg font-semibold text-prim group-hover:text-second transition-all duration-200 ml-3">
                          Listen Now
                        </span>
                      </Link>

                      {/* Etiqueta de Episodio (más compacta y elegante) */}
                      <span className="bg-gray/50 border border-gray-700 px-4 py-1.5 rounded-full text-prim text-xs lg:text-sm font-bold uppercase tracking-widest">
                        {episode.episode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {EpisodesData.length > 10 && (
            <div className="flex justify-center mt-12">
              <Button
                variant="btn2"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "Show More"}
                <i className="bi bi-arrow-right-short"></i>
              </Button>
            </div>
          )}
        </div>

        {/* Banner */}
        <div className="px-[8%] lg:px-[10%] py-20">
          <div className="page-banner p-10 lg:pb-20 flex flex-col justify-center items-center text-center rounded-2xl relative">
            <Image
              src={pageBanner1}
              alt="Page Banner"
              width={500}
              height={550}
              className="hidden lg:block absolute bottom-0 -left-30 xl:-left-40 z-0 pointer-events-none"
            />

            <Image
              src={pageBanner2}
              alt="Page Banner"
              width={500}
              height={550}
              className="hidden lg:block absolute bottom-0 -right-30 xl:-right-40 z-0 pointer-events-none"
            />

            <div className="music-waves"></div>

            <div className="my-3 mt-5">
              <span className="flex items-center gap-2 text-black px-4 py-3 rounded-full border border-black">
                <Image
                  src={rocketIcon}
                  alt="rocketIcon"
                  width={30}
                  height={30}
                />

                <h2 className="text-2xl">
                  Call To Action
                </h2>
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-5 font-semibold w-full lg:w-[50%] text-text z-0">
              Let's Discuss For Any Episodes
            </h1>

            <Button variant="btn2" className="bg-text text-black">
              Get In Touch <i className="bi bi-arrow-right-short"></i>
            </Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default page