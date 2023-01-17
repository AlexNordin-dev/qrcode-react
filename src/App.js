import { createContext, useState } from "react";
import Form from "./components/Form";
import QrCode from "./components/QrCode";
import './App.css';
import axios from "axios";

//context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: '',
    color: '',
    eyes: ''
  });

  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  ///___________________API_________________________




  const getQRCode = async () => {
    const options = {
      method: 'POST',
      url: 'https://qrtiger.com/api/qr/static',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 5425ef50-9337-11ed-a156-215f15a33c89'
      },
      data: {
        //size: 200,
        colorDark: inputValue.color,
        // qrFormat: 'svg',
        eyes: inputValue.eyes,

        // backgroundColor: 'rgb(255,255,255)',
        //transparentBkg: false,
        qrCategory: 'url',
        text: inputValue.url,
        // frame: 1,
        // frameColor: 'rgb(255,255,255)',
        // frameText: 'hej',

      }
    };

    axios.request(options).then(function (response) {
      // console.log(response.data);
      setResponse(response.data);
    }).catch(function (error) {
      console.error(error.response.data);
      setError(error.response.data);
    });
  }
  ///___________________END API_________________________
  const value = {
    inputValue,
    setInputValue,
    getQRCode,
    response,
    loading,
    error,
  };

  return (
    <div className="App">
      <InputContext.Provider value={value}>
        <div className='qrcode-input'>
          <Form />

        </div>
        <div className='qrcode-output'>
          <QrCode />
        </div>
      </InputContext.Provider>


    </div>
  );
}

export default App;
