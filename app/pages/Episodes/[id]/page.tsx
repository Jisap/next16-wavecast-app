"use client"

import PageHeader from '@/app/Components/PageHeader/PageHeader'
import { useParams } from 'next/navigation';
import EpisodesData from '@/app/JsonData/EpisodesData.json'
import { useFavorites, Episode } from '@/app/Hooks/useFavorites'
import Link from 'next/link';
import EpisodeCard from '@/app/Components/EpisodeCard/EpisodeCard';
import EpisodeBanner from '@/app/Components/EpisodeBanner/EpisodeBanner';
import Image from 'next/image';
import { useState, useMemo } from 'react';

const faqs = [
  {
    question: "How often are new episodes released?",
    answer: "New episodes are released every Monday with fresh topics and guest interviews."
  },
  {
    question: "Where can I listen to the podcast?",
    answer: "You can listen on Spotify, Apple Podcasts, Google Podcasts, and directly on our website."
  },
  {
    question: "How long are the episodes?",
    answer: "Each episode typically lasts between 30 and 60 minutes."
  },
  {
    question: "Can I suggest a topic or guest?",
    answer: "Yes, we love hearing from our listeners. You can send us your suggestions through the contact form."
  },
  {
    question: "Is the podcast free to listen to?",
    answer: "Yes, all episodes are completely free and available on all supported platforms."
  },
  {
    question: "Do you offer transcripts of the episodes?",
    answer: "Selected episodes include transcripts, which are available on the episode detail page."
  }
]


const popularTags = [
  "Podcast", "Storytelling", "Music", "Innovation", "Technology", "History", "Politics", "Voice", "Insights", "News"
]

const EpisodeDetails = () => {

  const { id } = useParams();
  const { toggleFavorite, isFavorite, mounted } = useFavorites();

  const episode = EpisodesData.find(
    (episode) => episode.id === Number(id)) as Episode | undefined;

  const randomEpisodes = useMemo(() => {
    return [...EpisodesData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpenIndex = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // Evitamos errores de hidratación
  if (!mounted) return null;

  if (!episode) {
    return (
      <div className='dark-section px-[8%] lg:px-[16%] py-32 text-center'>
        <h2 className='text-4xl text-gray-400'>
          Episode not found
        </h2>

        <Link href="/pages/Episodes" className='inline-block mt-6 text-prim underline'>
          Go back to Episodes
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={<>Episode <span className='text-prim'>Details</span></>}
      />

      {/* Episode Details Wrapper */}
      <div className='dark-section px-[8%] lg:px-[10%] xl:px-[16%] py-20'>
        <div className='flex flex-col lg:flex-row items-start gap-10'>

          {/* Main Content Column (65%) */}
          <div className='w-full lg:w-[65%]'>
            <div className='bg-gray p-6 rounded-3xl space-y-8'>

              {/* Main Episode Card Integration */}
              <div className="bg-gray-dark/30 rounded-2xl overflow-hidden">
                <EpisodeCard
                  episode={episode}
                  isFavorite={isFavorite(episode.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </div>

              {/* Episode Content Sections */}
              <div className='bg-gray-light rounded-2xl p-6 lg:p-8 space-y-10'>

                {/* Description */}
                <section>
                  <h2 className='text-2xl lg:text-3xl font-bold mb-4 text-white'>
                    Episode Description
                  </h2>
                  <p className='text-gray-400 tracking-wide leading-relaxed text-sm lg:text-base'>
                    Explore the enchanting world of podcasting with our latest episode, where we dive deep into the art of storytelling and the power of the human voice. Join us as we uncover hidden gems and share exclusive insights that will leave you inspired and motivated.
                  </p>
                </section>

                {/* Guest Appearance */}
                <section>
                  <h2 className='text-2xl lg:text-3xl font-bold mb-4 text-white'>
                    Guest Appearance
                  </h2>
                  <p className='text-gray-400 tracking-wide leading-relaxed text-sm lg:text-base'>
                    Learn more about our special guest, a seasoned storyteller with a passion for weaving narratives that resonate. In this segment of our podcast, we bring you the insights and perspectives of remarkable individuals who have made their mark in various fields.
                  </p>
                </section>

                {/* Related Episodes */}
                <section>
                  <h2 className='text-2xl lg:text-3xl font-bold mb-6 text-white'>
                    Related Episodes
                  </h2>
                  <div className='grid grid-cols-1 gap-6'>
                    {randomEpisodes.map((ep: Episode, index: number) => (
                      <Link
                        key={index}
                        href={`/pages/Episodes/${ep.id}`}
                        className='group flex flex-col md:flex-row bg-gray p-4 rounded-2xl items-center gap-6 hover:bg-gray-dark transition-all duration-300 border border-transparent hover:border-prim/30'
                      >
                        <div className='w-full md:w-48 shrink-0 overflow-hidden rounded-xl aspect-video md:aspect-square'>
                          <Image
                            src={ep.image}
                            alt={ep.name}
                            width={400}
                            height={400}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                          />
                        </div>

                        <div className="flex-1">
                          <span className="text-prim text-xs font-bold uppercase tracking-widest mb-2 block">{ep.episode}</span>
                          <h3 className='text-xl lg:text-2xl font-bold group-hover:text-prim transition-colors duration-200 mb-1'>
                            {ep.title}
                          </h3>
                          <h4 className='text-prim/80 font-medium mb-3'>{ep.name}</h4>
                          <p className='text-gray-400 text-sm line-clamp-2'>{ep.pere}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Transcript Section */}
                <section>
                  <h2 className='text-2xl lg:text-3xl font-bold mb-4 text-white'>
                    Transcript & Insights
                  </h2>
                  <div className="space-y-4">
                    <p className='text-gray-400 tracking-wide leading-relaxed text-sm lg:text-base'>
                      For those who prefer reading or have accessibility needs, here's the full transcript of the episode. View captivating images and visuals that complement the storytelling journey explored in this episode. Untangle the strands that bind us to stories that have formed cultures, sparked imaginations, and stirred emotions throughout history.
                    </p>
                    <p className='text-gray-400 tracking-wide leading-relaxed text-sm lg:text-base italic border-l-2 border-prim pl-4 bg-prim/5 py-4 rounded-r-lg'>
                      "The ever-changing world of apps gives you a front-row ticket to the latest technological marvels. Our podcast explores the various programs that enrich and simplify our modern existence through creativity and utility."
                    </p>
                  </div>
                </section>

                {/* Social Share / Follow */}
                <div className='flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray rounded-2xl border border-gray-700'>
                  <h2 className='text-prim text-2xl font-bold flex items-center gap-2'>
                    Follow US <i className='bi bi-chevron-double-right text-sm'></i>
                  </h2>

                  <div className='flex items-center gap-3'>
                    {['instagram', 'twitter-x', 'facebook', 'youtube', 'threads'].map((social) => (
                      <i key={social} className={`bi bi-${social} w-10 h-10 text-prim rounded-full flex items-center justify-center border border-prim/30 hover:border-prim hover:bg-prim hover:text-black transition-all duration-300 cursor-pointer text-lg`}></i>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <div className='bg-gray-light p-6 lg:p-10 rounded-3xl'>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-2 h-10 bg-prim rounded-full"></span>
                  <h2 className='text-3xl font-bold text-white'>Frequently Asked Questions</h2>
                </div>

                <div className='space-y-4'>
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div
                        key={index}
                        className={`rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? "bg-prim border-prim shadow-[0_0_20px_rgba(var(--prim-rgb),0.2)]" : "bg-gray-dark/50 border-gray-700 hover:border-prim/50"
                          }`}
                      >
                        <button
                          className={`w-full flex justify-between items-center p-5 text-left transition-all duration-300 ${isOpen ? "text-black" : "text-white"
                            }`}
                          onClick={() => toggleOpenIndex(index)}
                        >
                          <span className='text-lg lg:text-xl font-bold pr-4'>{faq.question}</span>
                          <span className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-black text-prim" : "bg-prim text-black"
                            }`}>
                            <i className={`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} text-xl`}></i>
                          </span>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}>
                          <div className={`p-6 pt-0 leading-relaxed ${isOpen ? "text-black/80" : "text-gray-400"}`}>
                            <div className={`border-t mb-4 ${isOpen ? "border-black/10" : "border-gray-700"}`}></div>
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column (35%) */}
          <aside className='w-full lg:w-[35%] lg:sticky lg:top-24 space-y-6'>
            <div className='bg-gray p-1 rounded-3xl overflow-hidden shadow-2xl group'>
              <div className='bg-gray-dark/50 p-6 rounded-[calc(1.5rem-2px)] border border-gray-700/50'>
                <div className='flex justify-center flex-col items-center gap-4'>
                  <div className='relative w-48 h-48 lg:w-64 lg:h-64'>
                    <div className="absolute inset-0 bg-prim/20 rounded-full blur-3xl group-hover:bg-prim/30 transition-colors duration-500"></div>
                    <div className='relative w-full h-full overflow-hidden rounded-full border-4 border-prim/20 p-2'>
                      <Image
                        src={episode.image}
                        alt={episode.title}
                        width={800}
                        height={800}
                        className='w-full h-full rounded-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105'
                      />
                    </div>
                  </div>

                  <div className='text-center w-full'>
                    <h3 className='text-lg font-bold text-white mb-4 uppercase tracking-widest'>
                      Follow on
                    </h3>

                    <div className='flex items-center justify-center gap-3 mb-8'>
                      {['instagram', 'twitter-x', 'facebook', 'youtube', 'threads'].map((social) => (
                        <i key={social} className={`bi bi-${social} w-10 h-10 text-prim rounded-full flex items-center justify-center border border-prim/30 hover:border-prim hover:bg-prim hover:text-black transition-all duration-300 cursor-pointer text-lg`}></i>
                      ))}
                    </div>
                  </div>

                  <div className="w-full border-t  border-gray-700 pt-4">
                    <h3 className='text-xs font-bold text-gray-400 mb-5 text-center uppercase tracking-[0.2em]'>
                      Listen on Platforms
                    </h3>

                    <div className="flex flex-wrap justify-center gap-3">
                      {[
                        { name: 'Apple', icon: 'brand-icon-1.png' },
                        { name: 'Spotify', icon: 'brand-icon-2.png' },
                        { name: 'Google', icon: 'brand-icon-3.png' },
                        { name: 'Soundcloud', icon: 'brand-icon-4.png' },
                        { name: 'RSS', icon: 'brand-icon-5.png' },
                      ].map((platform) => (
                        <Link
                          key={platform.name}
                          href="#"
                          title={platform.name}
                          className="w-12 h-12 bg-gray-light hover:bg-prim rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-prim group"
                        >
                          <Image
                            src={`/Images/${platform.icon}`}
                            alt={platform.name}
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain transition-all group-hover:scale-110"
                          />
                        </Link>
                      ))}
                    </div>


                  </div>
                </div>
              </div>
            </div>

            {/* Popular Tags Section */}
            <div className='bg-gray p-6 rounded-3xl border border-gray-700/50'>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-1.5 h-6 bg-prim rounded-full"></span>
                <h3 className='font-bold text-white uppercase tracking-wider text-sm'>Popular Tags</h3>
              </div>

              <div className='flex flex-wrap gap-2'>
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href="#"
                    className='px-4 py-2 bg-gray-light hover:bg-prim text-gray-400 hover:text-black text-xs font-bold rounded-full border border-gray-700 hover:border-prim transition-all duration-300 uppercase tracking-widest'
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter or similar sidebar element */}
            <div className='bg-prim p-8 rounded-3xl text-black'>
              <h3 className='text-2xl font-bold mb-4'>Newsletter</h3>
              <p className='text-sm mb-6 font-medium opacity-80'>Get the latest updates and exclusive content delivered to your inbox.</p>
              <div className='relative'>
                <input type="text" placeholder="Your Email" className='w-full bg-white/20 border border-black/10 rounded-full py-3 px-6 placeholder:text-black/50 outline-none focus:bg-white/40 transition-all' />
                <button className='absolute right-1 top-1 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform'>
                  <i className='bi bi-arrow-right'></i>
                </button>
              </div>
            </div>
          </aside>

        </div>
      </div>

      <EpisodeBanner />
    </>
  )
}

export default EpisodeDetails