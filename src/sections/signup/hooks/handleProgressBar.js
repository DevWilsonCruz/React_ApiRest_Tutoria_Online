import React,{useEffect, useState} from "react";
const handleData = (data,setData,newBarData ,setProgressBarData)=>{
  setData((prevData) => ({ ...prevData, ...data }));
  setProgressBarData(newBarData);
}
export default handleData;