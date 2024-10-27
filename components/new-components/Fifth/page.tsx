import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#0078D4] px-4 sm:px-8 lg:px-24 py-8 lg:py-12'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
          <Image src={"/new-ui/fifth.png"} height={500} width={500} alt='' className='w-full lg:w-[30vw]' />
          <div className='w-full lg:w-[60vw]'>
            <div className='text-2xl sm:text-3xl leading-tight lg:leading-[50px] text-white font-semibold mb-4 lg:mb-5'>
            Evaluate the benefits and costs of upgrading all devices to Windows 11 before the EOS date, October 14, 2025.
            </div>
            <button className='text-[#0078D4] bg-white px-4 sm:px-5 py-2 sm:py-3 text-lg sm:text-xl font-semibold'>Calculate now</button>
          </div>
      </div>
    </div>
  )
}

export default page
