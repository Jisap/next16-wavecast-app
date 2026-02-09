"use client"

import Image from "next/image"
import Link from "next/link"
import { Episode } from "@/app/Hooks/useFavorites"

interface EpisodeCardProps {
  episode: Episode;
  isFavorite: boolean;
  onToggleFavorite: (episode: Episode) => void;
}

const EpisodeCard = ({ episode, isFavorite, onToggleFavorite }: EpisodeCardProps) => {
  return (
    <div className="flex flex-col xl:flex-row bg-gray-light rounded-2xl p-4 lg:p-6 overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-lg gap-4">
      {/* Columna de la Imagen (40% de ancho en desktop) */}
      <div className="w-full xl:w-[40%] shrink-0">
        <Image
          src={episode.image}
          alt={episode.name}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl aspect-4/3 xl:aspect-auto"
        />
      </div>

      {/* Columna de Información (60% de ancho en desktop) */}
      <div className="w-full xl:w-[60%] flex flex-col justify-between">
        <div className="p-2 lg:p-4">
          <div className="flex flex-row flex-wrap justify-between items-center mb-4 gap-2">
            <Link href={`/pages/Episodes/${episode.id}`}>
              <p className="flex items-center font-light text-gray-200 hover:text-prim tracking-wide transition-all duration-200 text-sm">
                <i className="bi bi-mic text-prim mr-1"></i>
                {episode.name}
              </p>
            </Link>

            <div className="flex items-center gap-3">
              <h2 className="flex items-center text-gray-300 text-sm">
                <i className="bi bi-clock mr-1 text-prim"></i>
                {episode.time}
              </h2>
              <i
                onClick={() => onToggleFavorite(episode)}
                className={`bi cursor-pointer text-xl ${isFavorite ? "bi-heart-fill text-red-500" : "bi-heart text-gray-400 hover:text-white"
                  } transition-colors duration-200`}
              ></i>
            </div>
          </div>

          <Link href={`/pages/Episodes/${episode.id}`}>
            <h2 className="text-xl lg:text-2xl font-semibold hover:text-prim transition-all duration-200 line-clamp-1">
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
  )
}

export default EpisodeCard
