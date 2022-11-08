//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Subject from './Component/Subject'
import Result from './Component/Result'
function App() {
  const [Res, setResult] = useState(true);
  const [prop1,setProp1] = useState();
  const [Marks,setMarks] = useState({});
  // const [marks, setMarks] = useState([{ English: "", Maths: " ", Science: "", Social: "" }]);
// useEffect(()=>{
//   console.log(Marks)
// })
  function result(data) {
   // console.log(data,'from app')
    if(data!=null)
    {
    setProp1(data);
    console.log(data,'from app')
    }

  }

  return (
    <div className="App">

      <center>
        {/* <Subject Marks={Marks} result={result} />
        <Result Marks={Marks} prop1={prop1}/> */}
        
         { Res === true ? <div> <Subject Marks={Marks} setMarks={setMarks} result={result}/> <button id="button" onClick = {() => setResult(false)}>Result</button></div> :
           <div>< Result Marks={Marks} prop1={prop1} /><button id="button" onClick = {() => setResult(true)}>Success</button></div>}
      

    </center>
    </div >
  )
}

export default App;
