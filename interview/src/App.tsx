import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';




function App() {

  const [answer, setAnswer] = useState<{} | null | undefined>({});
  useEffect(()=>{
    handleClick();
  },[])




  const handleClick = () => {

    setAnswer(10)
  }

  return (
    <div className="App">
      {JSON.stringify(answer, null, 2)}
      <button onClick={()=>handleClick()} >Run</button>
    </div>
  );
}

export default App;


