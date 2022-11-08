import React from 'react'
import Subjects from './Subject';

const Result = (props) => {
  
  // const res=props.prop1;
  var ecsid='';
  var sccsid='';
  var mcsid='';
  var scsid='';
  var csid='';
  const res=props.prop1;
  console.log(res,'res')
  //const res1=props.setmarks

  if(props.prop1!=undefined)
  {
    var nda=[]
  // console.log(props.prop1,'from result')
     nda.push(props.prop1)
    //  console.log(nda.English,'from result')
     if(nda.length>0)
     {
    console.log(nda.length)
    // console.log(nda[0].English,'da data')
     
  // // da.push(props.prop1)
  //   console.log(da,'type eesult vbalue')
  //  da=props.prop1;
   
   
     }}
     
   
     function sum( obj ) {
      var sum = 0;
      for( var el in obj ) {
        //  console.log(el,"el")  //keys:english,m,s,sc
         console.log(typeof(obj[el]),"obj")   //values:marks type:string
          sum += parseFloat( obj[el] );        //convert string into float
          
        }
      
      return sum;
    }
    var total= sum( res );
    console.log( "Total: "+total );
    
    let Grade;
    if(total<136)
    {
      Grade='F';
      csid='red'
    }
    else if(total>=136 && total<=250)
    {
      Grade='C'
      csid='orange'
    }
    else if(total>=250 && total<=350)
    {
       Grade='B'
       csid='yellow'
    }
    else if(total>=350 && total<=400 )
    {
      Grade='A'
      csid='green'
    }


    
     let Grade1,Grade2,Grade3,Grade4;
    //English
       if(nda[0].English >35) 
       {
     if(nda[0].English>=40 && nda[0].English <=50)
     {
     Grade1='D';
     ecsid='red'
     

     }
   else if(nda[0].English>=50 && nda[0].English <=60 )
     {
     Grade1='C';
     ecsid='light_orange'
    }
   else if(nda[0].English>=60 && nda[0].English <=70 )  
    {
    Grade1='B';
    ecsid='orange'
   }
   else if(nda[0].English>=70 && nda[0].English <=80 )  {
    Grade1='A';
    ecsid='yellow'
   }
   else if(nda[0].English>=80 && nda[0].English <=90 )
   {
    Grade1='S';
    ecsid='light_green'
   }
   else if(nda[0].English >=90 )
   {
    Grade1='O';
    ecsid='green'
   }
 }
 else{
   Grade1='F';
   ecsid='red'
  
 }
//Maths
 if(nda[0].Maths >35) 
 {
if(nda[0].Maths>=40 && nda[0].Maths <=50)
{
Grade2='D';
mcsid='redc'
}
else if(nda[0].Maths>=50 && nda[0].Maths <=60 )
{
Grade2='C';
mcsid='light_orange'
}
else if(nda[0].Maths>=60 && nda[0].Maths <=70 )  
{
Grade2='B';
mcsid='orange'
}
else if(nda[0].Maths>=70 && nda[0].Maths <=80 )  {
Grade2='A';
mcsid='yellow'
}
else if(nda[0].Maths>=80 && nda[0].Maths <=90 )
{
Grade2='S';
mcsid='light_green'
}
else if(nda[0].Maths >=90 )
{
Grade2='O';
mcsid='green'
}
}
else{
Grade2='F';
mcsid='red'
}
//Science
if(nda[0].Science >35) 
{
if(nda[0].Science>=40 && nda[0].Science <=50)
{
Grade3='D';
scsid='redc';
}
else if(nda[0].Science>=50 && nda[0].Science <=60 )
{
Grade3='C';
scsid='light_orange'
}
else if(nda[0].Science>=60 && nda[0].Science <=70 )  
{
Grade3='B';
scsid='orange'
}
else if(nda[0].Science>=70 && nda[0].Science <=80 )  {
Grade3='A';
scsid='yellow'
}
else if(nda[0].Science>=80 && nda[0].Science<=90 )
{
Grade3='S';
scsid='light_green'
}
else if(nda[0].Science >=90 )
{
Grade3='O';
scsid='green'
}
}
else{
Grade3='F';
scsid='red'
}
 //Social  
if(nda[0].Social  >35) 
{
if(nda[0].Social >=40 && nda[0].Social <=50)
{
Grade4='D';
sccsid='redc'
}
else if(nda[0].Social >=50 && nda[0].Social  <=60 )
{
Grade4='C';
sccsid='light_orange'
}
else if(nda[0].Social >=60 && nda[0].Social  <=70 )  
{
Grade4='B';
sccsid='orange'
}
else if(nda[0].Social >=70 && nda[0].Social  <=80 )  {
Grade4='A';
sccsid='yellow'
}
else if(nda[0].Social >=80 && nda[0].Social <=90 )
{
Grade4='S';
sccsid='light_green'
}
else if(nda[0].Social  >=90 )
{
Grade4='O';
sccsid='green'
}
}
else{
Grade4='F';
sccsid='red'
}
return (
    <div>
      <h1>Result</h1><br></br><br></br>
    {nda?.length>0?

      <table border={2} width="50%" cellPadding={20}>
             <tr>
                <th>Subject</th>
                <th>Result</th>
                <th>Grade</th>         
             </tr>
             <tr>
              <td>English</td>
              
              <td>{nda[0]?.English}</td>
              <td id={ecsid}><b>{Grade1}</b></td>
              </tr>
                     <tr><td>Maths</td>
                     <td>{nda[0]?.Maths}</td>
                      <td id={mcsid}><b>{Grade2}</b></td>
                      </tr>
                     <tr><td>Science</td>
                     <td>{nda[0]?.Science}</td>
                     <td id={scsid}><b>{Grade3}</b></td>
                      </tr>
                     <tr><td >Social</td>
                     <td>{nda[0]?.Social}</td>
                     <td id={sccsid}><b>{Grade4}</b></td>
                      </tr>
               </table>
:<h1>no </h1>}
          <h3>Total:{total}</h3><br></br>
         {/*<button> <h3 id={csid}><b>Total Grade:{Grade}</b></h3></button><br></br>  */}
         <b><p>Total grade:</p><h3 id={csid}>{Grade}</h3></b>
         {/* <div>
          <input type="checkbox" name="fail" id="1" value="F"/>
         <label>F</label>
          </div>
          <div>
          <input type="checkbox" name="fail" id="2" value="D"/>
         <label>D</label>
          </div>
          <div>
          <input type="checkbox"  id="2" value="C"/>
         <label>C</label>
          </div> */}
          
    </div>
  )
}

export default Result
