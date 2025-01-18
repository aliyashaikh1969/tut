import React,{useState} from "react"

export const Form =()=>{
    const [name,setName] = useState("")
    const [interest , setInterest] = useState("")
    const [checked,setChecked] = useState(false)

    const getFormData =(e)=>{
        e.preventDefault()
        // console.log(e)
        console.log(name,interest,checked)
    }
 
   
    return(
        <>
        <h1>form</h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="enter a name" onChange={(e)=>setName(e.target.value)}/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option value="frontend-developer">frontend developer</option>
                <option value="backend-developer">backend developer</option>
                <option value="fullstack-developer">fullstack developer</option>
            </select>
            <input type="checkbox" name="terms-condition" id="terms-condition" onChange={(e)=>setChecked(e.target.checked)} />
            <label htmlFor="terms-condition">accept terms and condition</label>
            <button type="submit">submit</button>
        </form>
        </>
    )
}