// import React, { useEffect, useState } from 'react'
// import {API_KEY} from '../../constants/constants'
import './banner.css'


function Banner() {
   return (
      <div className='banner'>
          <div className='content'>
              <h1 className='title'></h1>
              <div className='banner_buttons'>
                  <button className='button'>play</button>
                  <button className='button'>My list</button>
              </div>
              <h1 className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                   The point of using Lorem Ipsum is that it has a more-or-less   </h1>
          </div>
          <div className="fade"></div>
      </div>
    )
  }

export default Banner