import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const DynamicButton = ({func, text}) => {
  
  const themeSlice = useSelector(state => state.theme)

  const dynamicText = themeSlice === false ? 'white' : 'black'

  const dynamicBack = themeSlice === false ? 'black' : 'white'

  return <Button className='btns'
    style={{ color: dynamicText, backgroundColor: dynamicBack }}
    onClick={func}
    // onKeyDown={keysEvents}
    variant="contained">
    {text}
  </Button>;
};

export default DynamicButton;
