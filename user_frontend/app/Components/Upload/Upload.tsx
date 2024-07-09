import React from 'react'

const Upload = () => {
    return (
        <div className='w-1/2 h-1/2 p-3 flex flex-col gap-3 bg-[#1F2326] rounded-3xl'>

            <div className='flex w-full justify-between items-center ' >
            <div className='text-white font-bold text-3xl'>
                Upload
            </div>

            <div className='text-white text-3xl'>
            X
            </div>

            </div>

            <div className='w-full rounded-3xl h-1/2 flex flex-col items-center gap-2 justify-center bg-[#363636] border border-[#4a4949] border-dashed '>

            <div className='img'>
                <img src="fileIcon.png" alt="" />
            </div>
            <div className='text-white text-xl font-bold'>
                Drop your file or <span className='text-green-900 font-bold' >Click </span>  to Browse
            </div>

            </div>

            <div  className='h-28 flex gap-3  w-full bg-[#363636] rounded-3xl p-3 '>

            <div className='btn btn-lg '>
                <img src="fileDefault.png" alt="" className='h-1/2' />

                <div>
                
                </div>
            </div>

            <div className='text-xl flex flex-col w-3/4  justify-between text-white '>
                <div>
                    Default Filename
                </div>
                <div className='text-lg'>
                    Size
                </div>

            </div>

            <div className='flex items-center  '>

                <div className='bg-black'>
                    <img src="editIcon.png" className='h-1/4' alt="" />

                </div>
                <div>

                </div>
                
            </div>
           

            </div>

            <div className='flex justify-between'>
                <div className='btn btn-lg '>
                Cancel
                </div>
                <div className='btn btn-lg bg-success'>
                Save
                </div>

            </div>



        </div>
    )
}

export default Upload