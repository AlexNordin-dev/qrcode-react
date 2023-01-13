import React from 'react'
import { saveAs } from 'file-saver';
import { useContext } from "react";
import { InputContext } from "../App";
import './QrCode.css';

const QrCode = () => {
  const { response, loading, error } = useContext(InputContext);
  //console.log(response.url)
  const downloadImage = () => {
    saveAs(response.url, 'qrCode.png');
  }
  //console.log(saveAs)
  if (loading) {
    return (
      <div >
        <div ></div>
        <div ></div>
      </div>
    );
  }


  if (error) {

    //console.error(response.statusText);
    return (

      <div className='error-message' >😥 <br /> Error message: {error.message}  </div>

    )

  }
  return (
    <div className='qr-code'>

      <img className='img-qr' src={response.url} alt="QR Code" />

      <div>
        <button onClick={downloadImage} className='btn color-1'>Ladda ner</button>
      </div>
    </div>
  )
}

export default QrCode;