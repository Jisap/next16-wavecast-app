"use client"

import EpisodesData from "@/app/JsonData/EpisodesData.json"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import { useFavorites, Episode } from "@/app/Hooks/useFavorites"
import EpisodeCard from "@/app/Components/EpisodeCard/EpisodeCard"

const LatestEpisodes = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  // Aseguramos que tomamos los últimos 10 ordenando por ID (descendente)
  const latestEpisodes: Episode[] = [...EpisodesData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 10);

  return (
    <>
      <PageHeader title="Latest Episodes" />

      <div className="dark-section px-[8%] lg:px-[16%] py-30">
        {/* Episodes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestEpisodes.map((episode: Episode, index) => (
            <EpisodeCard
              key={index}
              episode={episode}
              isFavorite={isFavorite(episode.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default LatestEpisodes
