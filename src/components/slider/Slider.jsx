import React, { useState } from 'react'
import './slider.css'
import ArrowBackIosOutlined from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styled from 'styled-components';
import { sliderItems } from '../../data';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props)=> props.slideIndex * -100}vw)
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }

  return (
    <div className='slider-container'>
      <div className='slider-arrow-left' onClick={()=> handleClick("left")}>
        <ArrowBackIosOutlined/>
      </div>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <div className='slider-image-container'>
                <img className='slider-image' src={item.img} />
              </div>
                <div className='slider-info'>
                  <h1 className='slider-title'>{item.title}</h1>
                  <p className='slider-desc'>{item.desc}</p>
                  <button className='slider-button'>SHOW NOW</button>
                </div>
            </Slide>
          ))}
        </Wrapper>
      <div className='slider-arrow-right' onClick={()=> handleClick("right")}>
        <ArrowForwardIosOutlinedIcon/>
      </div>
    </div>
  )
}

export default Slider