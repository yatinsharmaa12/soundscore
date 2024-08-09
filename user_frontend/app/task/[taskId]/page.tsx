"use client"
import { BACKEND_URL } from '@/Utils/Utils'
import Appbar from '@/app/Components/Appbar'
import AudioPlayers from '@/app/Components/AudioPlayer/AudioPlayer'
import MusicPlayer from '@/app/Components/MusicPlayer/MusicPlayer'
import MusicPlayertemp from '@/app/Components/MusicPlayer/MusicPlayertemp'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

async function getTaskDetails(taskId: string) {
  const response = await axios.get(`${BACKEND_URL}/v1/user/task?taskId=${taskId}`, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    },
  })
  return response.data
}

const Page = ({ params: { taskId } }: { params: { taskId: string } }) => {

  const [result, setResult] = useState<Record<string, {
    count: number;
    option: {
      imageUrl: string
    }
  }>>({});

  const [taskDetails, setTaskDetails] = useState<{ title?: string }>({});

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const data = await getTaskDetails(taskId);
        setResult(data.result);
        setTaskDetails(data.taskDetails);
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    };
  
    if (taskId) {
      fetchTaskDetails();
    }
  }, [taskId]);
  const handleClick = () => {
    console.log( result);
    console.log(taskDetails);
  };


  return (
    <main className='w-full h-screen border border-orange-900 bg-black'>

      <div className="w-full   z-20 ">
        <Appbar />
      </div>

      <div className=' relative top-[20%] p-4  w-full  border border-green-900 h-[50%] '>
      <div className="flex flex-row h-full justify-center items-center gap-6">
          {Object.entries(result).map(([key, value]) => (
            <MusicPlayer 
              key={key} 
              audioSrc={value.option.imageUrl} 
              count={value.count.toString()} 
            />
          ))}
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