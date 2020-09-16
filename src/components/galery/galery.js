import React from 'react';
//  , img1, img2, imgbig, imgsmall.
function Galery(props) {
  return (
    <div className="galery" >
        <img src={props.img1} className='img1'></img>
        <img src={props.imgbig} className='imgbig'></img>
        <img src={props.img2} className='img2'></img>
        <img src={props.imgsmall} className='imgsmall'></img>
    </div>
  );
}

export default Galery;
