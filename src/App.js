import React, { useState } from 'react';

import { Configuration, OpenAIApi} from 'openai';
import './App.css';



function App() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_KEY,
  });
 
  
    const openai = new OpenAIApi(configuration);
    const getImage = async () => {
    const response = await openai.createImage({
     prompt,
     n: 1,
     size: "1024x1024",
     })
     setResult(response.data.data[0].url);
    };

    
     
    

  return (
    <div className="app-main">
    <h1>Generate your own image by Artificial intelligence (Dalle-E) </h1>
    <input 
    className='app-input' 
    type="text" 
    placeholder='Type something to generate an Image'
    onChange={(e) => setPrompt(e.target.value)}
    />
      <button onClick={getImage}>Generate image</button>
      {result.length > 0 ? <img className='app-result__image' src={result} alt="result" /> : <></>}
    </div>
  );
}

export default App;
