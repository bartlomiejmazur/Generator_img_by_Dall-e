import React, { useState } from 'react';
import { Configuration, OpenAIApi} from 'openai'

import './App.css';

function App() {
  

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    console.log(openai);
    

  return (
    <div className="App">
   
    </div>
  );
}

export default App;
