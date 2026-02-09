"use client"

import EpisodeBanner from '@/app/Components/EpisodeBanner/EpisodeBanner'
import PageHeader from '@/app/Components/PageHeader/PageHeader'
import { useFavorites, Episode } from '@/app/Hooks/useFavorites'
import EpisodeCard from '@/app/Components/EpisodeCard/EpisodeCard'
import Link from 'next/link'
import Button from '@/app/Components/Button/Button'

const FavoriteEpisode = () => {
  const { favorites, toggleFavorite, isFavorite, mounted } = useFavorites();

  // Evitamos errores de hidratación esperando a que el componente esté montado
  if (!mounted) return null;

  return (
    <>
      <PageHeader title={<>Your <span className="text-prim">Favorites</span></>} />

      <div className="dark-section px-[8%] lg:px-[16%] py-32">
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {favorites.map((episode: Episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                isFavorite={isFavorite(episode.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center text-center py-20 border-t border-b border-gray-700">
            <h2 className="text-3xl text-gray-400 mb-8">
              You don't have any favorite episodes yet.
            </h2>
            <Link href="/pages/Episodes">
              <Button variant="btn2">
                Explore Episodes <i className="bi bi-arrow-right-short"></i>
              </Button>
            </Link>
          </div>
        )}
      </div>

      <EpisodeBanner />
    </>
  )
}

export default FavoriteEpisode