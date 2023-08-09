import React from 'react';
import '../Icons/Icons.css';

const Icons = ({ imgIcon, title, desc, descImg, link }) => {
  return (
    <div id='contactIcons'>
      <i><img src={imgIcon} alt="" className='imgIcon'/></i>
      <div className='contentIcon'>
        <h4 className='iconText'>{title}</h4>
        <p className='iconText'>{desc}</p>
        <div className='descImgContainer'>
          <i><a href={link}><img src={descImg} alt="" className='descImg' /></a></i>
        </div>
      </div>
    </div>
  );
}

export default Icons;
