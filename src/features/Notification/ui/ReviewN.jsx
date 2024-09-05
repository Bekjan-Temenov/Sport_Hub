import React from 'react'
import NavBarContainer from '../../../shared/helpers/NavBarContainer'
import shareicon from '../../../shared/assets/svg/shareIcon.svg'
import deleteIcons from '../../../shared/assets/svg/deleted.svg'
import pen from '../../../shared/assets/svg/pen.svg'
import unsplash from '../../../shared/assets/png/unsplash.png'

const ReviewN = () => {
  return (

    <NavBarContainer>
      <div className='border-b '>
        <h1 className='text-2xl mb-2'>Отзыв</h1>
      </div>
      <div className='w-[600px] h-[210px] bg-white mt-8 rounded-lg p-4'>
        <div className='flex justify-between'>
          <div className='flex gap-2 justify-center items-center'>
            <img className='w-3' src={shareicon} alt="shareicon" />
            <h1 className='text-black'>“Bilimkana Arena”</h1>
          </div> 
          <div className='flex gap-2 ' >
            <button className='w-[38px] h-[38px] rounded-lg bg-[#FE0404] flex justify-center items-center'>
              <img src={deleteIcons} alt="deleteIcons" />
            </button>
            <button className='w-[38px] h-[38px] bg-[#FE0404] rounded-lg flex justify-center items-center' >
              <img src={pen} alt="pen" />
            </button>+
          </div>
        </div>
        <div>
          <div className='flex gap-5 items-center'>
            <img src={unsplash} alt="" />
            <div>
              <h2 className='text-[#18171A] text-[15px]'>Торогелдиева Айжанат</h2>
              <p className='text-[#5A5A5A] text-[12px]'> 6 дней назад</p>
              <svg width="95" height="15" viewBox="0 0 95 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.75 5.775L9.25625 5.3875L7.5 1.25L5.74375 5.39375L1.25 5.775L4.6625 8.73125L3.6375 13.125L7.5 10.7938L11.3625 13.125L10.3438 8.73125L13.75 5.775ZM7.5 9.625L5.15 11.0437L5.775 8.36875L3.7 6.56875L6.4375 6.33125L7.5 3.8125L8.56875 6.3375L11.3062 6.575L9.23125 8.375L9.85625 11.05L7.5 9.625Z" fill="#E41C26" />
                <path d="M33.75 5.775L29.2563 5.3875L27.5 1.25L25.7437 5.39375L21.25 5.775L24.6625 8.73125L23.6375 13.125L27.5 10.7938L31.3625 13.125L30.3438 8.73125L33.75 5.775ZM27.5 9.625L25.15 11.0437L25.775 8.36875L23.7 6.56875L26.4375 6.33125L27.5 3.8125L28.5687 6.3375L31.3062 6.575L29.2313 8.375L29.8563 11.05L27.5 9.625Z" fill="#E41C26" />
                <path d="M53.75 5.775L49.2563 5.3875L47.5 1.25L45.7437 5.39375L41.25 5.775L44.6625 8.73125L43.6375 13.125L47.5 10.7938L51.3625 13.125L50.3438 8.73125L53.75 5.775ZM47.5 9.625L45.15 11.0437L45.775 8.36875L43.7 6.56875L46.4375 6.33125L47.5 3.8125L48.5687 6.3375L51.3062 6.575L49.2313 8.375L49.8563 11.05L47.5 9.625Z" fill="#E41C26" />
                <path d="M73.75 5.775L69.2563 5.3875L67.5 1.25L65.7437 5.39375L61.25 5.775L64.6625 8.73125L63.6375 13.125L67.5 10.7938L71.3625 13.125L70.3438 8.73125L73.75 5.775ZM67.5 9.625L65.15 11.0437L65.775 8.36875L63.7 6.56875L66.4375 6.33125L67.5 3.8125L68.5687 6.3375L71.3062 6.575L69.2313 8.375L69.8563 11.05L67.5 9.625Z" fill="#E41C26" />
                <path d="M93.75 5.775L89.2563 5.3875L87.5 1.25L85.7437 5.39375L81.25 5.775L84.6625 8.73125L83.6375 13.125L87.5 10.7938L91.3625 13.125L90.3438 8.73125L93.75 5.775ZM87.5 9.625L85.15 11.0437L85.775 8.36875L83.7 6.56875L86.4375 6.33125L87.5 3.8125L88.5687 6.3375L91.3062 6.575L89.2313 8.375L89.8563 11.05L87.5 9.625Z" fill="#E41C26" />
              </svg>

            </div>
          </div>
          <p className='text-[#18171A] text-[14px] mt-2'>Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были
            незначительные ошибки, но ребята сразу их исправляли. В целом все работает
            стабильно. Сотрудничаем дальше.</p>
        </div>
      </div>
    </NavBarContainer>

  )
}

export default ReviewN