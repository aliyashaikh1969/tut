import Basic from "./basic/Basic";
import { Form } from "./basic/Form";
import { FunPassAsProps } from "./basic/FunPassAsProps";
import { Props } from "./basic/Props";
const app = () => {
const PassFun = ()=>{
  alert("hello world")
}
  return (
    <>
      <h1>App</h1>
      {/* <Basic /> */}

      {/* <Props name={"anil"} email={"emeil.com"} number={123} id={1} /> */}


      {/* <Form/> */}


      <FunPassAsProps send={PassFun}/>
    </>

  )
}

export default app;