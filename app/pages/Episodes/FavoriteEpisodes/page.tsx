"use client"

import EpisodeBanner from '@/app/Components/EpisodeBanner/EpisodeBanner'
import PageHeader from '@/app/Components/PageHeader/PageHeader'
import { useFavorites, Episode } from '@/app/Hooks/useFavorites'
import EpisodeCard from '@/app/Components/EpisodeCard/EpisodeCard'
import Link from 'next/link'
import Button from '@/app/Components/Button/Button'
import { motion, Variants } from "framer-motion"

const FavoriteEpisode = () => {
  const { favorites, toggleFavorite, isFavorite, mounted } = useFavorites();

  // Evitamos errores de hidratación esperando a que el componente esté montado
  if (!mounted) return null;

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
      <PageHeader title={<>Your <span className="text-prim">Favorites</span></>} />

      <div className="dark-section px-[8%] lg:px-[16%] py-32">
        {favorites.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {favorites.map((episode: Episode) => (
              <motion.div key={episode.id} variants={fadeInUp}>
                <EpisodeCard
                  episode={episode}
                  isFavorite={isFavorite(episode.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="w-full flex flex-col items-center text-center py-20 border-t border-b border-gray-700"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl text-gray-400 mb-8">
              You don't have any favorite episodes yet.
            </h2>
            <Link href="/pages/Episodes">
              <Button variant="btn2">
                Explore Episodes <i className="bi bi-arrow-right-short"></i>
              </Button>
            </Link>
          </motion.div>
        )}
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <EpisodeBanner />
      </motion.div>
    </>
  )
}

export default FavoriteEpisode