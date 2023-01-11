import Form from "./components/Form";
import QrCode from "./components/QrCode";
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='qrcode-input'>
        <Form />      
        
      </div>
      <div className='qrcode-output'>
      <QrCode />
      </div>
    </div>
  );
}

export default App;
