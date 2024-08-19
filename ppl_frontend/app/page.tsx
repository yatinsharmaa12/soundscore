"use client"
import { BACKEND_URL } from '@/Utils/Utils'
import Appbar from '@/app/Components/Appbar'
import MusicPlayer from '@/app/Components/MusicPlayer/MusicPlayer'
import MusicPlayertemp from '@/app/Components/MusicPlayer/MusicPlayertemp'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NextTask from './Components/NextTask'

const Page = () => {

  const [result, setResult] = useState<Record<string, {
    count: number;
    option: {
      imageUrl: string
    }
  }>>({});


  return (
    <main className='w-full h-screen border border-orange-900 bg-black'>

      <div className="w-full   z-20 ">
        <Appbar />
      </div>

      <div className=' relative top-[20%] p-4  w-full  border border-green-900 h-[50%] '>
      <div className="flex flex-row h-full justify-center items-center gap-6">
          <NextTask/>
          <MusicPlayertemp/>
        </div>

        {/* <div className='btn btn-lg ' onClick={handleClick}>
          CLICK ME
        </div> */}

      </div>



    </main>

  )
}

export default Page