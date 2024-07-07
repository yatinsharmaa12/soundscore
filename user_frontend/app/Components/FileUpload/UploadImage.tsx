"use client"
import axios from 'axios';
import React, { useState } from 'react'


import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BACKEND_URL, CLOUDFRONT_URL } from '@/Utils/Utils';
const UploadImage = (
  { updateFileName, fileName,updateFileURL,fileURL }:
    {
      updateFileName: (newImages: string[]) => void,
      fileName: string[],
      updateFileURL: (newImages: string[]) => void,
      fileURL: string[],
    }

) => {
  const [uploading, setUploading] = useState(false);
  // function onCheck(){
  //   console.log(CLOUDFRONT_URL);
  // }

  async function onFileSelect(e: any) {
    try {
      console.log("HEELO");
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      const filename = file.name;
      // console.log(filename);
      updateFileName([filename]);
      setUploading(true);
      console.log("token is ", localStorage.getItem("token"));

      const response = await axios.post(`${BACKEND_URL}/v1/user/presignedURL`,{
        filename,
      }, {
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

      updateFileURL([`${CLOUDFRONT_URL}/${response.data.fields["key"]}`]);
      console.log(`${CLOUDFRONT_URL}/${response.data.fields["key"]}`);
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
      {/* <Button variant="secondary" className='w-full flex justify-center'>
        
        
      </Button> */}

      <div className='relative btn btn-sm btn-primary  text-lg font-medium'>
        Upload
      <input
          type="file"
          onChange={onFileSelect}
          id="fileInput"
          className=' absolute z-10 left-0 opacity-0  cursor-pointer'
        />


      </div>



    </div>
  )
}




export default UploadImage

