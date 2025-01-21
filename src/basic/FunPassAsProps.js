export const FunPassAsProps = (Props)=>{
    console.log(Props)
    return(
        <>
        <h1>FunPassAsProps</h1>
        <button onClick={()=>Props.send()}>click</button>
        </>

    )
}