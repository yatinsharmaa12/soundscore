import React from 'react'

const DisplayFiles = ({filename,size}:{
    filename:string,
    size:string,
}) => {
    return (
        <div className='h-28 flex gap-3  w-full bg-[#363636] rounded-3xl p-3 '>

        <div className='btn btn-lg '>

            <img src="fileDefault.png" alt="" className='h-1/2' />

            <div>

            </div>
        </div>

        <div className='text-xl flex flex-col w-3/4  justify-between text-white '>
            <div>
                {filename}
            </div>
            <div className='text-lg'>
                Size:{size}
            </div>

        </div>

        <div className='flex items-center   '>

            <div className=' flex items-center justify-around w-full'>
                <div className='btn btn-sm btn-ghost'>
                    <img src="editIcon.png" className=' w-1/2' alt="" />

                </div>
                <div className='btn btn-sm btn-ghost'>
                    <img src="cancelIcon.png" className='w-1/2' />

                </div>

            </div>
            <div>

            </div>

        </div>


    </div>
    )
}

export default DisplayFiles