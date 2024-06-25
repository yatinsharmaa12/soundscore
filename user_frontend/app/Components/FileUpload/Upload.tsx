import { BACKEND_URL } from '@/Utils/Utils';
import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Upload = () => {

    const [images,setImages] = useState<string[]>([]);

    const [title,setTitle] = useState("");

    async function onSubmit()
    {
        const response = await axios.post(`${BACKEND_URL}/v1/user/task`,
            {
                options:images.map(image =>({
                    imageUrl:image
                })),
                title,
                signature: "hardcoded-signture"


            },{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            }

        )

        // useRouter.push(`/task/${response.data.id}`)

    }


  return (
    <div>Upload</div>
  )
}

export default Upload