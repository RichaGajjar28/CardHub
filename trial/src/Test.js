import React from 'react'

  function Test (){
  let [val,setVal]=React.useState('')
  const handleChange=(event)=>{
    console.log(event.target.value)
    setVal(event.target.value)
  }
  return(
    <>
    <input value={val} onChange={handleChange}/>
    {val}
    </>
  )
}

export default Test