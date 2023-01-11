import React from 'react'
import './QrCode.css';

const QrCode = () => {
  return (
    <div className='qr-code'>

      <img className='img-qr' src="https://qrtiger.com/temp/1673448742624.png" alt="QR Code" />

      <div>
        <button className='btn color-1'>Ladda ner</button>
      </div>
    </div>
  )
}

export default QrCode;