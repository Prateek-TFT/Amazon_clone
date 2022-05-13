import React from 'react'
import styles from '../../styles/card.css';
import image from '../../assets/img12.png';

function Card({movie}) {
  return (
    <div className='video-card-container'>
      <div className="video-card">
        <img src={image} className="video-card-image" alt="" />
        <video src="" mute loop className='card-video'></video>
      </div>
    </div>
  )
}

export default Card
