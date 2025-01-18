import { useState } from "react";

const Basic = () =>{
    const [data,setData] = useState("anil")
    const [number , setNumber] = useState(0);
    const [inputValue , setInputValue] = useState("")
    const [show , setShow]=useState(false)
    // let data = "anil"
    function click (){
        setData("peter");
        setNumber(number+1)
    }

    function getValue(e){
        setInputValue(e.target.value);
        // console.log(e)
    }
    function key(e){
        if(e.key == 'Enter' && inputValue !=""){
            setShow(true)
        }
    }
    return(
        <>
        <div className="App">
            <h4>click event</h4>
            <p>{data}</p>
            <p>{number}</p>
            <button onClick={click}>click</button>
        </div>

        <div className="input">
    

        <input type="text" placeholder="enter name" onChange={getValue} onKeyUp={key}/>
        <button onClick={()=>setShow(true)}>submit</button>
       
       
    {
        show? <h1>{inputValue}</h1>:""
    }
        </div>

        </>
    )
}

export default Basic;