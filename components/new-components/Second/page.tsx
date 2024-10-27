import React from 'react'
import Image from 'next/image'
import Calendar from '@/components/assets/Calendar'
import Time from '@/components/assets/Time'

const page = () => {
  return (
    <div className='bg-[#60CDFF] text-[#000014] px-4 sm:px-8 lg:px-24 py-8 lg:py-12 pb-56 md:pb-0 relative'>
        <div className='text-xl sm:text-2xl font-semibold pb-[2px]'>Designed to help you</div>
        <div className='text-3xl sm:text-4xl lg:text-5xl pb-3 sm:pb-5 tracking-wider'>Say ahead, <span className='font-bold'>stay secure.</span></div>
        <div className='text-xl sm:text-2xl font-semibold pb-2'>Join us to learn how outdated devices put your business at risk.</div>
        <div className='text-base sm:text-lg lg:text-xl font-medium flex flex-col sm:flex-row gap-4 sm:gap-8 pb-8 lg:pb-12'>
            <span className='flex gap-2 items-center'><Calendar className="w-5 sm:w-6" />28 November, 2024</span>
            <span className='flex gap-2 items-center'><Time className="w-5 sm:w-6" />16:00 PM-16:40 PM IST</span>
        </div>
        <Image src={"/new-ui/flipkart.png"} height={1000} width={1000} alt='second' className='w-[30vw] md:hidden' />
        <div className='text-2xl sm:text-3xl font-semibold pb-3 sm:pb-5'>Exciting Rewards for Attendees.</div>
        <button className='font-semibold bg-[#0078D4] px-4 sm:px-6 py-2 text-base sm:text-lg text-white'>Register Now</button>
        <Image src={"/new-ui/second.png"} height={1000} width={1000} alt='second' className='w-full sm:w-[60vw] lg:w-[43vw] absolute right-0 bottom-0' />
        <Image src={"/new-ui/flipkart.png"} height={1000} width={1000} alt='' className='hidden md:block md:w-[20vw] sm:w-[18vw] lg:w-[15vw] absolute bottom-0 left-1/2'  />
    </div>
  )
}

export default page
