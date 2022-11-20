import React, { useState } from 'react';

import { Configuration, OpenAIApi} from 'openai';
import './App.css';



function App() {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_KEY,
  });
 
  
  const [prompt, setPrompt] = useState('')
    const openai = new OpenAIApi(configuration);
    const getImage = async () => {
    const response = await openai.createImage({
     prompt: "Wolf on fire",
     n: 1,
     size: "1024x1024",
     })
     console.log(response.data.data[0].url);
    };

    
     
    

  return (
    <div className="app-main">
    <h1>Generate your own image by Artificial intelligence (Dalle-E) </h1>
    <input className='app-input' type="text" />
      <button onClick={getImage}>Generate image</button>
    </div>
  );
}

export default App;
