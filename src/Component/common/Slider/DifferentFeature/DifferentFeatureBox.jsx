import React from 'react'

export default function DifferentFeatureBox({image ,text ,handleClick}) {
  return (
    <div className='DifferentFeatureBox' onClick={handleClick}>
      <div className="DifferentFeatureContent">
        <img src={image} width={200} alt='differentFeaturesImages'/>
        <p className='DifferentFeatureContentText'>{text}</p>
      </div>
    </div>
  )
}
