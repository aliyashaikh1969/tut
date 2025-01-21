import { colors } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { use } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [interest, setInterest] = useState("");
  const [interestErr,setINterestErr] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedErr, setCheckedErr] = useState(false);

  const getFormData = (e) => {
    e.preventDefault();
    // console.log(e)
    if (name.length < 3) {
      setNameErr(true);
    } else if (!checked) {
      setCheckedErr(true);
    }else if(interest ==""){
        setINterestErr(true)
    } else {
      console.log({name, interest, checked});
    }
  };

  const handleValue = (e) => {
    const { name, value } = e.target;

    if (name == "name") {
      if (value < 3) {
        setNameErr(true);
      } else {
        setNameErr(false);
      }
      setName(value);
    } else if (name == "checked") {
      setChecked(e.target.checked);
      setCheckedErr(false)
    } else if (name == "interest") {
      console.log(name, value);
      setInterest(value);
      setINterestErr(false)
    }
  };

  return (
    <>
      <h1>form</h1>
      <form onSubmit={getFormData}>
        <input
          name="name"
          type="text"
          placeholder="enter a name"
          onChange={(e) => handleValue(e)}
        />
        {nameErr ? <span style={{ color: "red" }}>user name ERR</span> : null}
        <select name="interest" onChange={(e) => handleValue(e)}>
          <option>select your interest</option>
          <option value="frontend-developer">frontend developer</option>
          <option value="backend-developer">backend developer</option>
          <option value="fullstack-developer">fullstack developer</option>
        </select>
        {
            interestErr? <span style={{color:"red"}}>select your interest</span>:null
        }
        <input
          type="checkbox"
          name="checked"
          id="terms-condition"
          onChange={(e) => handleValue(e)}
        />
        <label htmlFor="terms-condition">accept terms and condition</label>
        {
            checkedErr?<span style={{color:"red"}}>accept </span>:null
        }
        <button type="submit">submit</button>
      </form>
    </>
  );
};
