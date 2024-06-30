"use client"
import axios from 'axios';
import React, { useState } from 'react'


import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
const UploadImage = (
  //   { onImageAdded, image }: {
  //   onImageAdded: (image: string) => void;
  //   image: string;
  // }

) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [uploading, setUploading] = useState(false);


  async function onFileSelect(e: any) {
    try {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      setUploading(true);
      console.log("token is ", localStorage.getItem("token"));
      const response = await axios.get(`${BACKEND_URL}/v1/user/presignedURL`, {
        headers: {
          "Authorization": localStorage.getItem("token"),

        }
      });
      console.log("preResponse is ", response);

      const presignedUrl = response.data.preSignedUrl;
      const fields = response.data.fields;
      const formData = new FormData();
      formData.append("bucket", fields.bucket);
      formData.append("X-Amz-Algorithm", fields["X-Amz-Algorithm"]);
      formData.append("X-Amz-Credential", fields["X-Amz-Credential"]);
      formData.append("X-Amz-Date", fields["X-Amz-Date"]);
      formData.append("key", fields.key);
      formData.append("Policy", fields.Policy);
      formData.append("X-Amz-Signature", fields["X-Amz-Signature"]);
      formData.append("file", file);
      const awsResponse = await axios.post(presignedUrl, formData);
      console.log(awsResponse);

      // onImageAdded(`${CLOUDFRONT_URL}/${response.data.fields["key"]}`);
    }
    catch (e) {
      console.log(e);
    }
    setUploading(false);

  }
  // if (image) {
  //   return <Image alt="someImage" className={'w-40 h-40 rounded'} src={image} />
  // }





  return (
    <div>
      <Button variant="secondary">
        UPLOAD
        <input
          type="file"
          onChange={onFileSelect}
          id="fileInput"
          className='absolute top-0 left-0 h-full w-full opacity-0  cursor-pointer'
        />

      </Button>



    </div>
  )
}




export default UploadImage

