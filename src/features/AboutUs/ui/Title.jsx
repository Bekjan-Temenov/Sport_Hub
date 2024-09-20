import React from 'react'
import gallery from "../../../shared/assets/svg/admin_gallery.svg";

function Title() {
  return (
    <div className='flex flex-col gap-y-[70px]'>
      <div className="flex items-center justify-between w-full ">
          <h1 className="ml-[50px] font-sans text-3xl font-semibold">
            Заголовок
          </h1>
          <div className="flex items-center cursor-pointer">
            <div className="py-[92px] border rounded px-[158px] bg-[#131313]">
              <img className="  w-[38px] h-[38px]" src={gallery} alt="icon" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <div className="py-[59px] border rounded px-[93px] bg-[#131313]">
            <img className="  w-[38px] h-[38px]" src={gallery} alt="icon" />
          </div>
          <div className="py-[59px] border rounded px-[93px] bg-[#131313]">
            <img className="  w-[38px] h-[38px]" src={gallery} alt="icon" />
          </div>
          <div className="py-[59px] border rounded px-[93px] bg-[#131313]">
            <img className="  w-[38px] h-[38px]" src={gallery} alt="icon" />
          </div>
        </div>
    </div>
  )
}

export default Title
