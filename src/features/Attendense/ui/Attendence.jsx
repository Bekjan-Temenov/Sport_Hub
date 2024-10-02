import React from 'react';
import NavBarContainer from '../../../shared/helpers/NavBarContainer';
import Slider from '@mui/material/Slider'; // Импорт Slider из MUI
import Box from '@mui/material/Box'; // Импорт Box для контейнера
import a from '../../../shared/assets/svg/a.svg'

function Attendence() {
  return (
    <NavBarContainer>
      
      <div className='border-b border-[#B6B7BC]'>
        <h1 className='text-[32px] font-bold'>Посещаемость</h1>
      </div>

      {/* Слайдеры в контейнере */} 
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
    
      <div className='flex gap-7'>
      <h1 className=' text-2xl ml-14'>Посещаемость</h1>
        {/* Первый слайдер для посещаемости */}
        <Slider
          // size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{
            color: 'red', 
            width:'200px',
            height:'20px',
            '& .MuiSlider-thumb': {
              backgroundColor: '#D9D9D9', 
            },
          }}
        />
        <p className='mt-3'>15 день</p>
        </div>

        <div className='flex gap-9 border-b border-[#B6B7BC]'>
        <h1 className='text-2xl ml-14'>Пропущенные</h1>
        <Slider  
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{
            display: 'flex',
            color: 'red', // Цвет трека слайдера
            width:'200px',
            height:'20px',
            '& .MuiSlider-thumb': {
              backgroundColor: '#D9D9D9',
            },
          }}
        />
        <p className='mt-2'>9 дня</p>
        </div>
        <div>
        <h3 class="text-lg font-semibold mb-2">Пропущенные дни</h3>
    <ul class="mb-6 ">
      <li class="flex gap-10  py-1">
        <span>Волейбол:</span>
        <span>1 день </span>
        <span> 12.09.2024</span>
      </li>
      <li class="flex gap-10  py-1">
        <span>Баскетбол:</span>
        <span>2 дня </span>
        <span>12/22.09.2024</span>
      </li>
      <li class="flex gap-10  py-1">
        <span>Баскетбол:</span>
        <span>2 дня  </span>
        <span>12/22.09.2024</span>
      </li>
      <li class="flex gap-10 py-1">
        <span>Баскетбол:</span>
        <span>2 дня </span>
        <span>12/22.09.2024</span>
      </li>
      <li class="flex gap-10 py-1">
        <span>Баскетбол:</span>
        <span>2 дня </span>
        <span>12/22.09.2024</span>
      </li>
    </ul>
        </div>
        <div className='border-b border-[#B6B7BC]'>
        </div>
        <div className=''>
          <h1 className='ml-72 text-2xl'>Награды</h1>
          <div className='flex '>
        <img src={a} alt=''/>
        <div>
        <p className='ml-10 mt-8'>Таэквондо</p>
        <p className='ml-12'>2-место</p>
        </div>
        <div className='text-center'>
        <p className='ml-10 mt-8'>Международный чемпионат</p>
        <p className='ml-10'>OPEN SHYMKENT GTF</p>
        </div>
          </div>
        </div>
        
      </Box>
      
    </NavBarContainer>
  );
}

export default Attendence;
