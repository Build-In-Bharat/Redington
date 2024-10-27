import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#282833] flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-24 py-10 lg:py-20'>
      <div className='text-white w-full lg:w-[43vw] text-lg mb-8 lg:mb-0'>
        <div className='text-[#60CDFF] text-3xl sm:text-4xl lg:text-5xl font-semibold'>Outdated PCs put your business at risk</div>
        <div className='font-bold text-xl sm:text-2xl my-6 lg:my-8'>Upgrade now before Windows 10 support ends in October 2025.</div>
        <div className='text-base sm:text-lg lg:text-xl'>Stay secure and up to speed with new Windows 11 Pro PCs that come with layers of security enabled by default and Al-enhanced efficiency. Designed for fast, easy deployment and compatibility with your mission-critical business apps, Windows 11 Pro PCs are your foundation for future innovation.</div>
        <button className='bg-[#0078D4] text-[#FFFFFF] px-4 sm:px-5 py-2 sm:py-3 mt-6 lg:mt-8 font-semibold text-sm sm:text-base'>Get Windows 11</button>
      </div>
      <div className='w-full lg:w-[35vw] flex justify-center lg:justify-end'>
        <Image src={"/new-ui/first.png"} height={500} width={500} alt='hero-image' className='w-full max-w-[500px] lg:w-[35vw] rounded-[37px]' />
      </div>
    </div>
  )
}

export default page
