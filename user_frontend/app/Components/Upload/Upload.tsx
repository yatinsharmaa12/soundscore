'use client'
import React, { useState } from 'react'
import UploadImage2 from '../FileUpload/UploadImage2'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { BACKEND_URL } from '@/Utils/Utils'
import DisplayFiles from './DisplayFiles'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Upload = () => {
    const [fileName, setFileName] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [fileURL, setFileURL] = useState<string[]>([]);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const updateFileName = (newFileName: string[]) => {
        setFileName([...fileName, ...newFileName]);
    };

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
                signature: "hardcoded-signature"
            }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        )
    }

    return (
        <motion.div 
            className='w-full max-w-4xl h-auto p-6 rounded-xl shadow-lg flex flex-col gap-6 bg-gray-900 mx-auto' 
            id='upload'
            ref={ref} // Attach the observer to this div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger animation only when inView is true
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className='text-4xl font-extrabold text-white text-center tracking-wider'
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
            >
                Create a Task
            </motion.div>

            <div className='flex flex-col items-center gap-4'>
                <input 
                    className="input input-bordered input-info w-2/3 max-w-xl text-lg rounded-xl bg-gray-800 text-white border-gray-500"
                    onChange={(e) => { setTitle(e.target.value) }} 
                    id="task" 
                    type="text" 
                    placeholder="What's your task" 
                    value={title}
                />
            </div>

            <motion.div
                className="w-full max-w-l p-4 border-2  rounded-lg text-center text-white flex items-center justify-center flex-col"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
            >
                <UploadImage2 updateFileName={updateFileName} fileName={fileName} updateFileURL={updateFileURL} fileURL={fileURL} />
                <p className="mt-2 text-sm">Drop your file or <span className="text-green-400 cursor-pointer">Click to Browse</span></p>
            </motion.div>

            <div className='flex flex-col items-center gap-3'>
                {fileName.length > 0 && fileName.map((file, index) => (
                    <DisplayFiles key={index} filename={file} size={""} />
                ))}
            </div>

            <div className="flex justify-between mt-6">
                <motion.div 
                    className="btn btn-wide bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-red-300 border-4 border-transparent bg-clip-border border-gradient-to-r from-blue-500 via-purple-500 to-purple-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Cancel
                </motion.div>

                <motion.div 
                    className='btn btn-wide bg-green-800 text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-green-300'
                    onClick={onSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Save
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Upload;
