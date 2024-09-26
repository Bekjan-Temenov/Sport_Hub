import React from 'react'
import { Buttons } from './Website'
import Title from './Title'
import Inputs from './Inputs'
import Schedule from '../../Adversting/ui/Schedule'
import OurAdvantages from './OurAdvantages'

function ModalSection({setIsOpen}) {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-[295%]">
    <div
      onClick={() => setIsOpen(false)}
      className="absolute left-0 w-full h-full bg-black opacity-70"
    ></div>
    <div className="bg-[#222224] top-[58px] w-[60%] right-[20%]  absolute flex flex-col px-[60px] py-[40px] rounded">
      <Title/>
      <hr className="border-[#B6B7BC]  w-full mt-[15px] mb-[50px]" />
      <Inputs />
      <OurAdvantages/>
      <Schedule title={"Расписание для взрослых"}/>
      <Schedule title={"Расписание для подростков"}/>
      <Schedule title={"Расписание для детей"}/>
      <Buttons setIsOpen={setIsOpen}/>
    </div>
  </div>
  )
}

export default ModalSection
