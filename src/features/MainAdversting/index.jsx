import React, { useState } from 'react'
import Header from './ui/Header'
import Adversting from './ui/Adversting'

function index() {
  const [isHandle, setIsHandle] = useState("Зал");

  const handleClick = (tab) => {
    setIsHandle(tab);
  };
  console.log(isHandle);

  return (
    <div>
      <Header handleClick={handleClick} isHandle={isHandle}/>
      <Adversting isHandle={isHandle}/>
    </div>
  )
}

export default index
