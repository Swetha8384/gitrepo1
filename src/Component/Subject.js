import React ,{ useState} from 'react'
import Result from './Result';
//import App from '../App';

// function Subjects(props) 
// {
    
//   const [marks,setMarks]=useState({ English:"",Maths:" ",Science:"",Social:""});
//     //const [input,setInput]=useState([]);
//     const submarks = (e) => {
//         setMarks ({...marks, [e.target.name]: [e.target.value]})
//         }
//         const submit = (e) => {
//             e.preventDefault()
//             console.log(props.marks ,props.setMarks)
          
      
//             }
//         const sucess=()=>
//         {
//             console.log("success")
//             props.result(marks)
             
//         }
       
//   return (
//     <div>
       
//       <h1>Student Marks</h1>
//       <form action="" onSubmit={submit}> 
//       <div>
//         <label>English:</label>
//         <input type="text" name="English" placeholder='Entermarks' value={marks.English} onChange={submarks}/><br></br><br></br>
//         </div>
//         <div>
//         <label>Maths:</label>
//         <input type="text" name="Maths" placeholder='Entermarks' value={marks.Maths} onChange={submarks}/><br></br><br></br>
//         </div>
//         <div>
//         <label>Science:</label>
//         <input type="text" name="Science" placeholder='Entermarks' value={marks.Science} onChange={submarks}/><br></br><br></br>
//         </div>
//         <div>
//         <label>Social:</label>
//         <input type="text" name="Social" placeholder='Entermarks' value={marks.Social} onChange={submarks}/><br></br><br></br>
//         </div>
//         <div>
          
//            <button type="submit" onClick={sucess}>submit</button>

//         </div>
//         </form>
//         {/* <Result marks={marks}/> */}
//         {/* {cform==true?<></>:<Result marks={marks}/> } */}
//     </div>

//   )
// }




function Subjects(props)
{
  const [Marks,setMarks]=useState()

 
    const [English,setEnglish]=useState(" ");
    const [Maths,setMaths]=useState(" ");
    const [Science,setScience]=useState("");
    const [Social,setSocial]=useState("");
    const submit=(e)=>{
		e.preventDefault();
        // setMarks(Marks => [...Marks,nda] );
      
        const nda={
          English:English,
          Maths:Maths,
          Science:Science,
          Social:Social
          }
          
        // const nda=[English,Maths]
        setMarks(nda)
        console.log(Marks,nda,"submit");
        console.log(Marks,"----------")
        console.log("success","success")
      props.result(nda); 
    }
    const sucess=()=>
            {
               
            }
         
    return (
            <div class="form">
                <h1>Marks</h1>
                <form action="" onSubmit={submit}> 
                    <div > 
                         <label>English:</label>            
                        <input type="text" name="English" value={English} onChange={(e)=>setEnglish(e.target.value)}/><br></br><br></br> 
                    </div> 
                    <div> 
                        <label>Maths:</label>
                    <input type="text" name="Maths"  value={Maths} onChange={(e)=>setMaths(e.target.value)}/><br></br><br></br> 
                    </div>  
                    <div> 
                        <label>Science:</label>
                    <input type="text" name="Science"  value={Science} onChange={(e)=>setScience(e.target.value)}/><br></br><br></br> 
                    </div> 
                    <div> 
                        <label>Social:</label>
                    <input type="text" name="Social"  value={Social} onChange={(e)=>setSocial(e.target.value)}/><br></br><br></br> 
                    </div> 
                    <button type="submit" >submit</button><br></br><br></br>
                 
                    
                
                </form>
            </div>
      
    );
}
export default Subjects;