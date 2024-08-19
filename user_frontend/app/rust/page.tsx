'use client'
import axios from 'axios';
import React from 'react'

const page = () => {

  async function onFileSelect(e: any) {
    try {
      console.log("HEELO");
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      const filename = file.name;

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("http://localhost:3001/runcode", formData);
      console.log(response);
      // console.log(response.data.key);

    }
    catch (e) {
      console.log(e);
    }

  }


  return (
    <div>
      <div className='w-full relative btn btn-ghost rounded-3xl h-1/2 flex flex-col items-center gap-2 justify-center bg-[#363636] border border-[#4a4949] border-dashed '>
        <input
          type="file"
          onChange={onFileSelect}
          id="fileInput"
          className=' absolute h-full w-full  opacity-0  cursor-pointer'
        />
        <div className='img'>
          <img src="fileIcon.png" alt="" />
        </div>
        <div className='text-white text-xl font-bold'>
          Drop your file or <span className='text-green-900 font-bold' >Click </span>  to Browse
        </div>

      </div>
    </div>
  )
}

export default page