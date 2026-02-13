"use client"

import EpisodesData from "@/app/JsonData/EpisodesData.json"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import { useFavorites, Episode } from "@/app/Hooks/useFavorites"
import EpisodeCard from "@/app/Components/EpisodeCard/EpisodeCard"
import EpisodeBanner from "@/app/Components/EpisodeBanner/EpisodeBanner"
import { motion, Variants } from "framer-motion"

const LatestEpisodes = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  // Aseguramos que tomamos los últimos 10 ordenando por ID (descendente)
  const latestEpisodes: Episode[] = [...EpisodesData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 10);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <>
      <PageHeader title="Latest Episodes" />

      <div className="dark-section px-[8%] lg:px-[16%] py-30">
        {/* Episodes List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {latestEpisodes.map((episode: Episode, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <EpisodeCard
                episode={episode}
                isFavorite={isFavorite(episode.id)}
                onToggleFavorite={toggleFavorite}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <EpisodeBanner />
      </motion.div>
    </>
  )
}

export default LatestEpisodes
