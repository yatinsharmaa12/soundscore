import { Button } from '@/components/ui/button'
import React from 'react'

const Appbar = () => {
    return (
        <div className='w-full h-20 border border-white   '>

            <div className='flex justify-between items-center '>

                <div className='btn btn-ghost btn-primary btn-lg ml-4 text-3xl font-bold '>
                    Soundscore
                </div>

                <Button size='lg'>
                    Connect Wallet
                </Button>
                

            </div>




        </div>
    )
}

export default Appbar