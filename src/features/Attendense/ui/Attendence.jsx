import React from 'react';
import NavBarContainer from '../../../shared/helpers/NavBarContainer';
import Slider from '@mui/material/Slider'; // Импорт Slider из MUI
import Box from '@mui/material/Box'; // Импорт Box для контейнера

function Attendence() {
  return (
    <NavBarContainer>
      {/* Заголовок */}
      <div className='border-b border-[#B6B7BC]'>
        <h1 className='text-[32px] font-bold'>Посещаемость</h1>
      </div>

      {/* Слайдеры в контейнере */}
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        {/* Первый слайдер для посещаемости */}
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{
            color: '#D9D9D9', // Цвет трека слайдера
            width:'294px',
            height:'32px',
            '& .MuiSlider-thumb': {
              backgroundColor: '#D9D9D9', // Цвет ползунка
            },
          }}
        />

        {/* Второй слайдер для пропущенных дней */}
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{
            color: '#D9D9D9', // Цвет трека слайдера
            width:'294px',
            height:'32px',
            '& .MuiSlider-thumb': {
              backgroundColor: '#D9D9D9',
            },
          }}
        />
      </Box>
    </NavBarContainer>
  );
}

export default Attendence;
