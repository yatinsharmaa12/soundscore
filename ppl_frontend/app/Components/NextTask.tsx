import { BACKEND_URL } from '@/Utils/Utils';
import axios from 'axios';
import React, { lazy, useEffect, useState } from 'react'
import MusicPlayer from './MusicPlayer/MusicPlayer';

interface Task {

    'id': number,
    'amount': number,
    'title': string,
    'options': {
        id: number,
        image_url: string,
        task_id: number


    }[]
}


const NextTask = () => {

    const [currentTask, setCurrentTask] = useState<Task | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // cant use await here , need to create a new function for it.
        axios.get(`${BACKEND_URL}/v1/listner/nextTask`, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        }).then(res => {
            setCurrentTask(res.data.task);
            setLoading(false);
        })

    }, []);

    if (loading) {
        return <div>
            Loading. Please wait
        </div>
    }

    if (!currentTask) {
        return <div>
            Please refresh or try later
        </div>
    }




    return (
        <div>
            {
                currentTask.options.map(option => <MusicPlayer onSelect={

                    async () => {
                        const response = await axios.post(`${BACKEND_URL}/v1/listner/submission`, {
                            taskId: currentTask.id,
                            selection: option.id
                        }, {
                            headers: {
                                'Authorization': localStorage.getItem('token'),
                            },
                        });

                        const nextTask = response.data.nextTask;
                        if (nextTask) {
                            setCurrentTask(nextTask);
                        }
                        else {
                            setCurrentTask(null);
                        }

                    }} key={option.id} audioSrc={option.image_url} />)
            }

        </div>
    )
}

export default NextTask
