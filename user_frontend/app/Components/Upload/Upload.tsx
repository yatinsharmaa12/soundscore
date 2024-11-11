'use client'
import React, { useState } from 'react'
import UploadImage2 from '../FileUpload/UploadImage2'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { BACKEND_URL } from '@/Utils/Utils'
import DisplayFiles from './DisplayFiles'

const Upload = () => {
    const [fileName, setFileName] = useState<string[]>([]);
    const updateFileName = (newFileName: string[]) => {
        setFileName([...fileName, ...newFileName]);
    };

    const [title, setTitle] = useState("");
    const [fileURL, setFileURL] = useState<string[]>([]);
    const updateFileURL = (newFileURL: string[]) => {
        setFileURL([...fileURL, ...newFileURL]);
    };

    const audioFiles = fileName.map((name, index) => ({
        audioSrc: fileURL[index],
        title: name,
    }));

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
    }

    return (
        <div className='w-full max-w-4xl h-auto p-6  rounded-xl shadow-lg flex flex-col gap-6'>
            <div className='text-4xl font-extrabold text-white text-center'>
                Create a Task
            </div>

            <div className='flex flex-col items-center gap-4'>
                <input 
                    className="input input-bordered input-info w-2/3 max-w-xl text-lg" 
                    onChange={(e) => { setTitle(e.target.value) }} 
                    id="task" 
                    type="text" 
                    placeholder="What's your task" 
                    value={title}
                />
            </div>

            <UploadImage2 updateFileName={updateFileName} fileName={fileName} updateFileURL={updateFileURL} fileURL={fileURL} />

            <div className='flex flex-col items-center gap-3'>
                {fileName.length > 0 && fileName.map((file, index) => (
                    <DisplayFiles key={index} filename={file} size={""} />
                ))}
            </div>

            <div className='flex justify-between mt-6'>
                <div 
                    className='btn btn-wide bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300'
                    onClick={() => console.log('Cancel clicked')}
                >
                    Cancel
                </div>
                <div 
                    className='btn btn-wide bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300'
                    onClick={onSubmit}
                >
                    Save
                </div>
            </div>
        </div>
    );
}

export default Upload;
