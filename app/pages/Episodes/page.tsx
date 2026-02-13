"use client"

import InputPill from "@/app/Components/InputPill/InputPill"
import EpisodesData from "@/app/JsonData/EpisodesData.json"
import { useMemo, useState } from "react"
import Button from "@/app/Components/Button/Button"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import { useFavorites, Episode } from "@/app/Hooks/useFavorites"
import EpisodeCard from "@/app/Components/EpisodeCard/EpisodeCard"
import EpisodeBanner from "@/app/Components/EpisodeBanner/EpisodeBanner"
import { motion, Variants } from "framer-motion"

const page = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { toggleFavorite, isFavorite } = useFavorites();

  const filteredEpisodes = EpisodesData.filter((episode: Episode) => {
    return (
      episode.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      episode.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      episode.episode.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  });

  const visibleEpisodes = showAll ? filteredEpisodes : filteredEpisodes.slice(0, 10);

  const [sortBy, setSortBy] = useState<string>('default');

  const sortedEpisodes = useMemo(() => {
    const list = [...visibleEpisodes];

    const strategies: Record<string, (a: Episode, b: Episode) => number> = {
      high: (a, b) => b.id - a.id,
      low: (a, b) => a.id - b.id,
      title: (a, b) => a.title.localeCompare(b.title),
    };

    return strategies[sortBy] ? list.sort(strategies[sortBy]) : list;
  }, [visibleEpisodes, sortBy]);

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
      {/* Page Section */}
      <PageHeader
        title={<>All <span className="text-prim">Episodes</span></>}
      />

      {/* Episodes */}
      <div className="dark-section relative">
        <motion.div
          className="episode-search"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
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
        </motion.div>

        <div className="px-[8%] lg:px-[16%] pt-32 pb-20">
          <motion.div
            className="flex justify-between items-center gap-5 p-2 mb-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
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
          </motion.div>

          {searchTerm && sortedEpisodes.length === 0 && (
            <motion.div
              className="w-full text-center my-12"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
            >
              <h2 className="text-3xl text-gray-400 border-t border-b border-red-400 py-10">
                '{searchTerm}' Episode Not Found
              </h2>
            </motion.div>
          )}

          {/* Episodes List */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {sortedEpisodes.map((episode: Episode, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <EpisodeCard
                  episode={episode}
                  isFavorite={isFavorite(episode.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </motion.div>
            ))}
          </motion.div>

          {EpisodesData.length > 10 && (
            <motion.div
              className="flex justify-center mt-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Button
                variant="btn2"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "Show More"}
                <i className="bi bi-arrow-right-short"></i>
              </Button>
            </motion.div>
          )}
        </div>

        {/* Banner Section */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <EpisodeBanner />
        </motion.div>
      </div>

    </>
  )
}

export default page
