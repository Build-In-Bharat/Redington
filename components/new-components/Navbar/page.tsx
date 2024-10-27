import React from 'react'
import Image from 'next/image'
import Redington from '@/components/assets/Redington'
import Windows from "@/components/assets/Windows-11"

const page = () => {
  return (
    <div className='bg-[#3B3B3B] py-5'>
      <div className='flex justify-between items-center sm:items-start px-8'>
        <Redington className='h-5 sm:h-8 ' />
        <Windows className='h-5 sm:h-8' />
      </div>
      {/* <div className='border-y-[#6D6C6C] border-x-[#3B3B3B] mt-5 border-[1px] h-8'></div> */}
    </div>
  )
}

export default page
