import Childprop from "./components/Childprop";
import StudentData from "./components/StudentData";
import ArraySample from './components/ArraySample';
import OneOf from "./components/OneOf";
import OneOfType from "./components/OneOfType";
import FunctionPass from "./components/FunctionPass";



function App() {
  let classname="code";
  const logstate=false;
  const result=logstate?<p>successfully login ..</p>:<p>you need to check</p>
  const arr=['item1','item2','item3','item4']
  const obj={
    name:"vijay",
    age:23,
    ismarried:false

  }
  const items=[
    {id:1,name:"vj"},
    {id:2,name:"ajith"},
    {id:3,name:"surya"}
  ]

  const handleclick=()=>{
    alert("this is function passing ")
  }
  return (
    <>
      <div> 
        jsx expression 
         <h1 className={classname}>VIJAY REACT TUTORIAL</h1>
        <p style={{color:'pink',fontFamily:'sans-serif'}}>learn with tamil</p> 
        {/* conditional rendering  */}
        {result}
        {/* jsx with list  */}
        <ul>{arr.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}</ul>
      </div>

      
  <StudentData name="vijay" age={23} ismarried={false}/>
      <StudentData age={23}/>
      <Childprop > 
        <p>1st child</p>
        <p>2nd child</p>
        <p>3rd child</p>
      </Childprop> */
      <ArraySample items={items}/>
      <OneOf color="black"/>
      <OneOfType value="vijay"/>
      <OneOfType value={23}/>
      <OneOfType value={true} />

      <h1>parent components</h1>
      <FunctionPass handleclick={handleclick}/>



    </>
  )
}


export default App
