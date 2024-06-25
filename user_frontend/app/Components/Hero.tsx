import React from 'react'
import UploadImage from './FileUpload/UploadImage'
import { ProgressDemo } from './FileUpload/ProgressDemo'

const Hero = () => {
  return (
    <div className='w-full h-screen border border-white '>
        <div className=' flex flex-col items-center gap-3'>

            <div className=' border  '>
                <span className='text-6xl text-white font-bold'>
                    LOGO LOREM EPSUM
                </span>
            </div>
            <div>

            <div className=' border   text-white text-4xl'>
            Upload Your Yracks, Get Reviewed
            </div>
            <div className=' border  text-white text-4xl'>
            And Earn Rewards
            </div>

            </div>

            <div className='flex flex-row-reverse '>

            <div className=' border  text-white text-2xl'>
            --all powered by Solana Blockchain
            </div>

            </div>
            <UploadImage/>
           
            

        </div>


    </div>
  )
}

export default Hero