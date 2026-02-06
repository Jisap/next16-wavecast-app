import Button from '@/app/Components/Button/Button'
import Image from 'next/image'
import bannerImg from "@/public/Images/banner.png"

const Banner = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[10%] py-20">
        <div className='banner bg-[#FFCA79] px-[7%] rounded-xl'>
          <div>
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-25'>
              <div className='w-full lg:w-3/5 relative'>
                <h1 className='text-4xl lg:text-5xl xl:text-6xl text-text font-semibold my-10'>
                  Get the Latest Episode & Never Miss an Episode
                </h1>

                <div className='flex flex-row items-center gap-2 bg-black rounded-full p-2 lg:p-5 mb-8'>
                  <div className='email-input grow'>
                    <input
                      type="email"
                      placeholder='Enter your email'
                      className='text-white text-sm lg:text-base px-3 py-2 outline-none w-full bg-transparent'
                    />
                  </div>

                  <div className='sub-btn w-auto shrink-0'>
                    <Button variant='btn1'>
                      Subscribe <i className="bi bi-arrow-right-short"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className='w-full lg:w-1/2'>
                <div className='banner-img'>
                  <Image
                    src={bannerImg}
                    alt='bannerImg'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner