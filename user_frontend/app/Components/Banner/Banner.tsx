"use client"
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='w-full h-full flex justify-center items-center z-0'>
            <img src="heroBg.jpg" className=' absolute -z-10 w-full h-full opacity-50 ' alt="" />
            <div className=' w-full h-3/4 pt-32 relative flex flex-col gap-4  items-center '>

                {/* <div className='relative top-44 font-extrabold left-44 text-7xl'>
            <span className='bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>SoundScore: </span> <span className='text-white' > Get Your Music Scored</span>
            </div>

            <div className=' relative top-48 left-72 text-3xl'>
                hello
            </div> */}


                <div className=' font-extrabold  text-7xl'>
                    <span className='bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>SoundScore: </span> <span className='text-white' > Get Your Music Scored</span>
                </div>

                <div className=' text-3xl text-slate-300 '>
                    Upload your Beats/Music and get them rated from listeners all over the world 
                </div>

                <Link href="#upload">

                <button className=' font-bold text-xl btn btn-lg mt-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 animate-gradient-x'>
                Upload Your Music

                </button>
                </Link>
            </div>


        </div>
    )
}

export default Banner