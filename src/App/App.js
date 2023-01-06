import React from "react";
import QRCode from "react-qr-code";
import './App.css';

function App() {
  const [inputValue, setInputValue] = React.useState('')
  return(
    <>
      <main>
          <section>
            <QRCode 
              className='qr-code' 
              value={inputValue}
              size={320}
            />
          </section>

          <section>

              <input 
                type="text" 
                className="input_text" 
                placeholder="Enter link" 
                id="inputText" 
                onChange={e => setInputValue(e.target.value)}
              />
          </section>
      </main>
    </>
  )
}

export default App;
