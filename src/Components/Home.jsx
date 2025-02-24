import React from 'react'
import { FaArrowRight, FaCalendarCheck, FaFontAwesome, FaSuitcase } from 'react-icons/fa'
import home from '../assets/ssssss.svg'
import accimg from '../assets/Accounting-Services.png'
import tax from '../assets/tax.jpg'
import finance from '../assets/10840.jpg'
import { IconContext } from 'react-icons'
import { MdAccessTime } from 'react-icons/md'
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './NavBar'


const Home = () => {
  return (
    
   <div className='home-container'>
    <NavBar/> 
    <div className='home-servies-heading'>
    <h6>SERVICES</h6>
    <h1>What I do</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nulla voluptatum saepe, aspernatur ab aperiam perspiciatis nobis itaque maiores repellendus. Repellendus sint beatae ipsa nostrum esse facere quidem accusantium molestias.</p>
    </div>
    {/* grid one */}
    <div className='home-services-grid'>
  <div className='acc-img'>
  <img src={accimg} alt=''/>
  </div>
  <div className='content-div'>
    <div className='content-desc'>
      <div className='content-li'>
      <h5>01.</h5>
      </div>
      <div className='content-head'>
      <h3>Accounting Services</h3>
      </div>
      <div className='content-p-div'>
      <p className='content-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit quibusdam accusamus assumenda odio sed cumque rem quos illum perspiciatis veritatis repellat eius blanditiis hic ipsam excepturi inventore vitae quasi!</p>
      </div>
      <div>
      <button className='content-div-btn'>Read More</button>
      </div>
      </div>
</div>
<div>

</div>
    </div>
{/* second grid */}
<div className='home-services-grid-two'>
  <div className='content-div-two'>
    <div className='content-desc'>
      <div className='content-li'>
      <h5>02.</h5>
      </div>
      <div className='content-head'>
      <h3>Tax Services</h3>
      </div>
      <div className='content-p-div'>
      <p className='content-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit quibusdam accusamus assumenda odio sed cumque rem quos illum perspiciatis veritatis repellat eius blanditiis hic ipsam excepturi inventore vitae quasi!</p>
      </div>
      <div>
      <button className='content-div-btn'>Read More</button>
      </div>
      </div>
</div>
<div className='acc-img'>
  <img src={tax} alt=''/>
  </div>
<div>

</div>
    </div>
    {/* third grid */}
    <div className='home-services-grid'>
  <div className='acc-img'>
  <img src={finance} alt=''/>
  </div>
  <div className='content-div'>
    <div className='content-desc'>
      <div className='content-li'>
      <h5>03.</h5>
      </div>
      <div className='content-head'>
      <h3>Financial Advisory</h3>
      </div>
      <div className='content-p-div'>
      <p className='content-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit quibusdam accusamus assumenda odio sed cumque rem quos illum perspiciatis veritatis repellat eius blanditiis hic ipsam excepturi inventore vitae quasi!</p>
      </div>
      <div>
      <button className='content-div-btn'>Read More</button>
      </div>
      </div>
</div>
<div>

</div>
    </div>
    <div className='home-servies-heading'>
    <h6>WHY CHOOSE ME</h6>
    <h1>Accurate Record Keeping</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nulla voluptatum saepe, aspernatur ab aperiam perspiciatis nobis itaque maiores repellendus. Repellendus sint beatae ipsa nostrum esse facere quidem accusantium molestias.</p>
    </div>
    <div className='home-cards'>
<div className='card-div'>
  <div className='card-icon'>
  <IconContext.Provider  value={{ color: '#30C7B5', size: '40px',backgroundColor: 'black',borderRadius: '50%', }}>
<FaCalendarCheck />
</IconContext.Provider>
</div>
<div>
  <span>Always On Time</span>
</div>
<div>
  <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
</div>
</div>
<div className='card-div'>
  <div className='card-icon'>
  <IconContext.Provider  value={{ color: '#30C7B5', size: '40px',backgroundColor: 'black',borderRadius: '50%', }}>
  <FaSuitcase />
</IconContext.Provider>
</div>
<div>
  <span>Hard Working</span>
</div>
<div>
  <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
</div>
</div>
<div className='card-div'>
  <div className='card-icon'>
  <IconContext.Provider  value={{ color: '#30C7B5', size: '40px' ,borderRadius: '50%', }}>
  <MdAccessTime />
</IconContext.Provider>
</div>
<div>
  <span>24/7 Availability</span>
</div>
<div>
  <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
</div>
</div>
    </div>
    <div className='testimonial-home-container'>
      <div className='testimonial-home-div'>
    <div className='home-servies-heading'>
    <h6>TESTIMONIAL</h6>
    <h1>What My Clients Say?</h1>
    </div>
    </div>
    <div className='home-cards'>
      <div className='card-div-client'>
      <div>
    <i class="fa fa-quote-left" aria-hidden="true"></i>
    </div>
    <div>
      <p className='client-div-p'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    <div> 
      <h4>Amanda Lee</h4>
      <span>CEO & Founder Crix</span>
    </div>
    </div>
    <div className='card-div-client'>
      <div>
    <i class="fa fa-quote-left" aria-hidden="true"></i>
    </div>
    <div>
      <p className='client-div-p'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    <div> 
      <h4>Amanda Lee</h4>
      <span>CEO & Founder Crix</span>
    </div>
    </div>
    <div className='card-div-client'>
      <div>
    <i class="fa fa-quote-left" aria-hidden="true"></i>
    </div>
    <div>
      <p className='client-div-p'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    <div> 
      <h4>Amanda Lee</h4>
      <span>CEO & Founder Crix</span>
    </div>
    </div>
    </div>
    </div>
   </div>
  )
}

export default Home