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
              <div className='w-full lg:w-1/2 relative'>
                <h1 className='text-5xl lg:text-6xl text-text font-semibold my-10'>
                  Get the Latest Episode & Never Miss an Episode
                </h1>

                <div className='flex flex-col md:flex-row items-start justify-between md:items-center gap-5 md:gap-0 bg-black rounded-2xl md:rounded-full p-5'>
                  <div className='email-input'>
                    <input type="email" placeholder='Enter your email' className='text-white px-3 py-2 outline-none' />
                  </div>

                  <div className='sub-btn'>
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