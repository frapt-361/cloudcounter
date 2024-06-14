import './App.css';
import { useState } from 'react';

  const Inbutton = ({diff,val,setVal}:{
    diff:number,
    val:number,
    setVal:React.Dispatch<React.SetStateAction<number>>
  }) =>{
    const clicked=()=>{
      setVal(val+diff);
    }
    return (
      <button onClick={clicked}>{diff}</button>
    );
  }

function App() {
  const [cnt, setCnt] = useState(0);
  return (
    <div className="App">
      <Inbutton diff={-1} val={cnt} setVal={setCnt}/>
      {cnt}
      <Inbutton diff={+1} val={cnt} setVal={setCnt}/>
    </div>
  );
}

export default App;
