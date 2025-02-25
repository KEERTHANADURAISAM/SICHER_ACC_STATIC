import React from 'react'
import "../Style/Services.css";
import img1 from'../assets/Wavy_Bus-21_Single-01.jpg'
import img2 from'../assets/investing-12.jpg'
import img3 from'../assets/investing-07-1.jpg'
import { MdSavings } from 'react-icons/md';
import { IoPieChart } from 'react-icons/io5';
import { RiBarChartFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
const Services = () => {
  return (
    <main>
  <div className='services-main'>
    <div className='services-header-content'>
      <h4>Welcome to Sicher</h4>
      <h2>Customized Financial Planning & Investing</h2>
      <p>We provide customized strategies to help you grow, manage, and secure your wealth. With expert guidance and tailored solutions, we ensure your investments align with your goals. Whether you're planning for the future or optimizing your current finances, we make the process seamless and effective.</p>
    </div>
    <div className='services-img-div'>
      <img src={img1}/>
    </div>
  </div>
  <div className='services-main-flex-div'>
  <div className='services-sub-flex-div'>
    <IconContext.Provider value={{color:"#3DC6B8",size:"2rem"}}>
  <MdSavings/>
  </IconContext.Provider>
  <h4>plan</h4>
  <span>Financial Planning</span>
  <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
  </div>
  <div className='services-sub-flex-div'>
    <IconContext.Provider value={{color:"#3DC6B8",size:"2rem"}}>
    <IoPieChart />
  </IconContext.Provider>
    <h4>Divesrify</h4>
  <span>Create a Diverse Portfolio</span>
  <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
  </div>
  <div className='services-sub-flex-div'>
    <IconContext.Provider value={{color:"#3DC6B8",size:"2rem"}}>
    <RiBarChartFill />
  </IconContext.Provider>
  <h4>Manage</h4>
  <span>Personal Wealth Management</span>
  <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
  </div>
  </div>
  <div className='how-we-work-div'>
<div>
  <h3>How We Work. Our Mission & Values</h3>
  <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
</div>
<div className='work-img-div'>
<img src={img2} alt=''/>
</div>
  </div>
  {/* financial services */}
  <div className='services-financial-div'>
    <div className='services-financialheader-div'>
      <h3>Financial Services</h3>
      <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi</p>
      <button>Learn More</button>
    </div>
    <div className='finanacial-service-headings'>
       <span>Retirement Plans</span>
       <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
       <span>Estate Planning</span>
       <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
       <span>Impact Investing </span>
       <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
    </div>
    <div className='finanacial-service-headings'>
       <span>Risk Management</span>
       <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
       <span>Portfolio Management</span>
       <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
       <span>Mergers & Acquisitions</span>
       <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
    </div>
  </div>
  <div className='financial-img-div'>
    <img src={img3} alt=''/>
  </div>
  {/* Tax services */}
 <div className='tax-services-main-div'>
  <p>
  We Offer a Professional Accounting Service and Record of Experience that is Unparalleled in Our Area</p>
<div>

</div>
 </div>
  
  </main>
  )
}

export default Services




{/* <div >
<h1>Invest Your Future</h1>
<h1>Welcome to Sicher</h1>
<div>
    <h3>Income Tax Services</h3>
{/* <ul>
<li>Personal Income Tax Filing</li>
<li>Corporate Taxation</li>
<li>Tax Planning and Advisory</li>
<li>Representation before Tax Authorities</li>
<li>Compliance and Regulatory Reporting</li>
</ul>
</div>
<div>
<h3>Company Law Consultancy</h3>
<ul>
  <li>Incorporation and Registration of Companies</li>
  <li>Corporate Governance Advisory</li>
  <li>Legal Compliance Management</li>
  <li>Drafting and Reviewing Legal Documents</li>
  <li>Company Secretarial Services</li>
</ul> 
</div>
<div>
<h3>Auditing Services</h3>
<ul>
  <li>Statutory Audits</li>
  <li>Internal Audits</li>
  <li>Tax Audits</li>
</ul> */}
