import React from 'react'
import './QrCode.css';

const QrCode = () => {
  return (
    <div className='qr-code'>
        QrCode
        <img className='img-qr' src="https://qrtiger.com/temp/1673448742624.png" alt="QR Code" />
        <button className='btn color-1'>Ladda ner</button>

    </div>
  )
}

export default QrCode;