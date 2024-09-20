import React from 'react'
import NavBarContainer from '../../../shared/helpers/NavBarContainer'

const Client = () => {
  return (
  <NavBarContainer>
    <div className='border-b border-[#B6B7BC] flex justify-between items-center'>
        <h1 className='text-[34px] font-bold'>Kлиент</h1>
      </div>
      <div className='border text-[24] mb-6  font-bold text-black border-red-500 bg-slate-200 rounded-[8px] px-10 flex justify-between'>
        <p>Имя</p>
        <p>Тренер</p>
        <p>Спорт</p>
        <p>Оплата</p>
      </div>
      <div className='border-b font-normal border-[#B6B7BC] px-10 flex justify-between '>
        <p>Рахманалиев Абай</p>
        <p>Махмудов Термирлан</p>
        <p>Волейбол</p>
        <p>не оплатил</p>
      </div>
  </NavBarContainer>
  )
}

export default Client