import React from 'react'
import { useState } from 'react';
import QRCode from 'react-qr-code';


const Coder = () => {
    const [devInput, setDevInput] = useState('');
    const [getColor, setGetColor] = useState('');
   

  return (
    <div className='aper'>
    <input placeholder='topor' type="text" onChange={e => setDevInput(e.target.value)}/>
    <p>{devInput}</p>
    <QRCode
      value={devInput}
      fgColor={getColor}
    />

<button onClick={e => setGetColor(e.target.value) }
        value='red'>Red</button>
         <button onClick={e => setGetColor(e.target.value) }
        value='blue'>Blue</button>
    </div>
  )
}

export default Coder;