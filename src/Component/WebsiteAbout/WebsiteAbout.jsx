import React from 'react'
import "../../App.css"
export default function WebsiteAbout() {
  return (
    <div className='WebsiteAboutContainer'>
       <div className='WebsiteAbout'>
<img src='/image/Docter.jpg' alt='ImageWebsiteAbout' width={400}/>
       </div>
       <div className='TextSection'>
   <p className='WebsiteAboutheadling'>HealthHubConnect</p>
   <p >Are you a provider interested in reaching new patients?</p>
   <ul>
    <li>Reach patients in your area looking for a new provider</li>
    <li>Fill last-minute openings in your schedule</li>
    <li>Strengthen your online reputation with verified reviews</li>
   </ul>
       </div>
    </div>
  )
}
