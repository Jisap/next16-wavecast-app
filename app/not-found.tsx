import Image from 'next/image'
import Page404img from "@/public/Images/Error404.png"
import Link from 'next/link'

const Page404 = () => {
  return (
    <>
      <div className='dark-section'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <Image
            src={Page404img}
            alt="404 Not Found"
            width={1000}
            height={1000}
            className='w-full h-full object-contain lg:h-[70%] lg:w-[70%]'
          />

          <Link href="/" className="mt-0 md:mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-white text-sm tracking-wide transition-all duration-300 hover:border-white hover:bg-white hover:text-black">
            <i className='bi bi-arrow-left-short text-xl'></i>
            Back To Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page404