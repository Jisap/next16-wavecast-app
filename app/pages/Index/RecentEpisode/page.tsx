"use client"

import Image from "next/image"
import bannerImg from "@/public/Images/episode-card-banner.png"
import Button from "@/app/Components/Button/Button"
import Link from "next/link"



const recentEpisodesList = [
  {
    id: "04",
    author: "Joseph Hall",
    duration: "4hr 28min",
    title: "Laughter Unleashed: Join Us for Joyful Conversations Today",
    description: "Embark on a journey of unexplored wisdom as delve into fascinating topics that challenge the mind.",
    episode: "12"
  },
  {
    id: "05",
    author: "Jhon Doe",
    duration: "3hr 37min",
    title: "Behind the Scenes: Candid Talks on Podcasting Strategies",
    description: "Unlock the secrets of inspiration with heartfelt stories and motivacional insights in this uplifting episode.",
    episode: "07"
  }
]

const RecentEpisode = () => {
  return (
    <>
      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-30 pb-0 md:pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full lg:w-1/1">
              <div>
                <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                  <i className="bi bi-rocket-takeoff pe-4"></i>
                  Recent Episode
                </h2>
              </div>

              <h1 className="text-6xl lg:text-7xl font-semibold mt-7 mb-5">
                Explore Our Latest Podcasts
              </h1>
            </div>

            <div className="w-full lg:w-1/2">
              <p>
                Dive into the most recent episodes that just hit the airwaves. Discover what's trending in our podcast world.
              </p>

              <Button variant="btn2" className="mt-4">
                View All Episode <i className="bi bi-arrow-right-short"></i>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 px-[8%] lg:px-[16%] pb-30">
          <div className="episodeBanner bg-[#FFCA79] px-5 rounded-2xl pb-5 ">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-0 lg:gap-5">
              <div className="w-full lg:w-1/2">
                <Image
                  src={bannerImg}
                  alt="Episode Banner"
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-5 py-5 overflow-hidden">
                  <Link href="/pages">
                    <h2 className="text-text hover:text-black whitespace-nowrap">
                      <i className="bi bi-mic"></i> Devon Lane
                    </h2>
                  </Link>

                  <h2 className="text-text whitespace-nowrap">
                    <i className="bi bi-clock pe-1"></i> 4hr 12min
                  </h2>

                  <div className="flex items-center gap-3 flex-1 overflow-hidden">
                    <i className="bi bi-balloon-heart me-3 text-text text-xl"></i>
                    <div className="music-waves"></div>
                  </div>
                </div>

                <h2 className="text-text text-3xl font-semibold">
                  Innovation insights: Diving Deep into Future Tech Trends
                </h2>

                <p className="text-text my-4 tracking-tight">
                  Ever wondered what happens behind the scenes? Join us for a candid conversation about podcasting and more
                </p>

                <div className="flex justify-between items-center gap-5">
                  <Link href="/pages" className="flex items-center gap-2 group">
                    <i className="bi bi-play p-4 bg-black rounded-full flex items-center justify-center text-prim text-2xl group-hover:bg-second group-hover:text-white cursor-pointer transition-all duration-200"></i>

                    <h2 className="text-xl underline text-black group-hover:text-second transition-all duration-200">
                      Listen Now
                    </h2>
                  </Link>

                  <span className="bg-black text-prim px-5 py-3 rounded-full text-xl">
                    Episode 03
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
            {recentEpisodesList.map((episode, index) => (
              <div key={index} className="w-full lg:w-1/2">
                <div className="p-6 rounded-2xl bg-gray">
                  <div className="flex items-center gap-5 overflow-hidden">
                    <Link href="/pages">
                      <h2 className="text-gray-300 whitespace-nowrap">
                        <i className="bi bi-mic"></i> {episode.author}
                      </h2>
                    </Link>

                    <h2 className="text-gray-300 whitespace-nowrap">
                      <i className="bi bi-clock pe-1"></i> {episode.duration}
                    </h2>

                    <div className="flex items-center gap-3 flex-1 overflow-hidden">
                      <i className="bi bi-balloon-heart me-3 text-gray-300 text-xl"></i>
                      <div className="music-waves2"></div>
                    </div>
                  </div>

                  <h2 className="text-gray-300 text-2xl md:text-3xl font-semibold">
                    {episode.title}
                  </h2>

                  <p className="my-4 tracking-tight">
                    {episode.description}
                  </p>

                  <div className="flex justify-between items-center gap-5">
                    <Link href="/pages" className="flex items-center gap-2 group">
                      <i className="bi bi-play p-4 bg-prim rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-second group-hover:text-white cursor-pointer transition-all duration-200"></i>

                      <h2 className="text-xl underline text-gray-300 group-hover:text-second transition-all duration-200">
                        Listen Now
                      </h2>
                    </Link>

                    <span className="bg-gray-light text-prim px-5 py-3 rounded-full text-xl">
                      Episode {episode.episode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentEpisode