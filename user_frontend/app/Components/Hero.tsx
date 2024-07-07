'use client'
import React, { useState } from 'react';
import UploadImage from './FileUpload/UploadImage';
import { ProgressDemo } from './FileUpload/ProgressDemo';
import { Typewriter } from 'react-simple-typewriter';
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { BACKEND_URL } from '@/Utils/Utils';

const Hero = () => {

  const [fileName, setFileName] = useState<string[]>([]);
  const updateFileName = (newFileName: string[]) => {
    setFileName([...fileName, ...newFileName]);
  };

  const [title, setTitle] = useState("");

  const [fileURL, setFileURL] = useState<string[]>([]);
  const updateFileURL = (newFileURL: string[]) => {
    setFileURL([...fileURL, ...newFileURL]);
  };

  async function onSubmit() {
    const response = await axios.post(`${BACKEND_URL}/v1/user/task`,
      {
        options: fileURL.map(file => ({
          beatUrl: file
        })),
        title,
        signature: "hardcoded-signture"


      }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }

    )

    // useRouter.push(`/task/${response.data.id}`)

  }


  return (
    <div className='h-full w-full flex '>
      <div className='relative w-3/5 h-full border border-black'>

        <div className='relative top-40 left-16 text-7xl' >
          <span className=' text-white font-extrabold' >
            Upload your  <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
              BEATS </span>
          </span>
        </div>

        <div className='relative top-40 left-16 text-7xl' >
          <span className=' text-white font-extrabold' >
            Get them   <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            <Typewriter
            words={['RATED', 'REVIEWED',]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
              
              </span>
          </span>
        </div>
        







      </div>
      <div className='w-2/5 h-full'>
        {/* Add your upload components or other content here */}
        <div className='relative flex flex-col gap-3  top-36 left-9 '>

          <div className='text-3xl font-extrabold text-white'>
            Create a Task
          </div>
          <div className='text-xl flex flex-col gap-2  font-semibold w-3/4'>
            <Label htmlFor="task" className='text-white'>TaskDetails </Label>
            <Input onChange={(e) => { setTitle(e.target.value) }} id="task" type="text" placeholder="What's your task" />
          </div>

          <div className='text-2xl flex items-center gap-4 text-white font-semibold'>
            Add your files
            <div className='' >
              <UploadImage updateFileName={updateFileName} fileName={fileName} updateFileURL={updateFileURL} fileURL={fileURL} />

            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-white">
              Uploaded Files:
              <ul className="list-disc list-inside">
                {fileName.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className='btn btn-lg w-1/4 btn-success' onClick={onSubmit}>
            {/* SUBMIT */}
            <span className="loading loading-dots loading-lg"></span>
          </div>



        </div>


      </div>
    </div>
  );
}

export default Hero;
