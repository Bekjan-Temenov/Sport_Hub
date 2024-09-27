import React, { useState } from 'react'
import Header from './ui/Header'
import Adversting from './ui/Adversting'

function index() {
  const [isHandle, setIsHandle] = useState("Зал");
  const [open, setOpen] = useState(true);

  const handleClick = (tab) => {
    setIsHandle(tab);
  };

  return (
    <div>
      <Header handleClick={handleClick} isHandle={isHandle} setOpen={setOpen} open={open}/>
      <Adversting isHandle={isHandle} setOpen={setOpen} open={open}/>
    </div>
  )
}

export default index
