import React, { useState } from 'react';

import RingLoader from "react-spinners/RingLoader";
import '../src/canvas'

import { Configuration, OpenAIApi} from 'openai';
import './App.css';




function App() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const configuration = new Configuration({
    apiKey: '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',
  });
 
    
    const openai = new OpenAIApi(configuration);
    const getImage = async () => {
   
    if(prompt === ""){
    return alert("You need write something example Dog on the carpet")
    }
    else{
    setResult('')
    setLoading(true)
    const response = await openai.createImage({
     prompt,
     n: 1,
     size: "1024x1024",
     })
     setResult(response.data.data[0].url);
     setLoading(false)
    };
  }
  

  return (
    
    <div className="app-main">
    
    <h1>Generate your own image by Artificial intelligence (Dalle-E) </h1>
    <input 
    className='app-input' 
    type="text" 
    placeholder='Type something to generate an Image'
    onChange={(e) => setPrompt(e.target.value)}
    />
   
      <button className='app-btn' onClick={getImage}><span>Generate image</span></button>
      {result.length > 0 ? <img className='app-result__image' src={result} alt="result" /> :<>
      
      <RingLoader
      className='loader'
        color={'#0f0'}
        loading={loading}
        size={50}
      />
      </>}
    </div>
    
    
    
   
  );
}

export default App;
