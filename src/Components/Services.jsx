import React from 'react'
import "../Style/Services.css";
import img1 from'../assets/Wavy_Bus-21_Single-01.jpg'
import img2 from'../assets/investing-12.jpg'
import img3 from'../assets/investing-07-1.jpg'
import tax from'../assets/bag.png'
import audit from'../assets/audit.png'
import finanacial from'../assets/financial.png'
import consultation from'../assets/consultation.png'
import taxplanning from'../assets/tax-planning.png'
import filling from'../assets/invoice.png'
import audition from '../assets/audition.png'
import report from '../assets/report.png'
import accountingbook from '../assets/accounting-book.png'
import taximg from '../assets/tax.png'

import { MdSavings } from 'react-icons/md';
import { IoPieChart } from 'react-icons/io5';
import { RiBarChartFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
const Services = () => {
  return (
    <main>
  <div className='services-main'>
    <div className='services-header-content'>
      <h4>We Specialize</h4>
      <h2>Departments</h2>
      <p>We provide customized strategies to help you grow, manage, and secure your wealth. With expert guidance and tailored solutions, we ensure your investments align with your goals. Whether you're planning for the future or optimizing your current finances, we make the process seamless and effective.</p>
    <div className='type-services-head'>
      <img src={tax} alt=''/>
      <h5>Income Tax Services</h5>
    </div>
    <div>
    <p>Cras ultricies ligula sed magna dictum porta. </p>
    </div>
    <div className='type-services-head'>
      <img src={finanacial} alt=''/>
      <h5>Company Law Consultancy</h5>
    </div>
    <div>
    <p>Cras ultricies ligula sed magna dictum porta. </p>
    </div>
    <div className='type-services-head'>
      <img src={audit} alt=''/>
      <h5>Auditing Service</h5>
    </div>
    <div>
    <p>Cras ultricies ligula sed magna dictum porta. </p>
    </div>
    <div className='type-services-head'>
      <img src={consultation} alt=''/>
      <h5>Finacial Advisory</h5>
    </div>
    <div>
    <p>Cras ultricies ligula sed magna dictum porta. </p>
    </div>
    </div>
    <div className='services-img-div'>
      <img src={img1}/>
    </div>
  </div>

  <div className='Accounting-services-div'>
<div className='accounting-services-sub-div'>
<h4>A Wide Range Of</h4>
  <h3> Income Tax Services</h3>
  <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
</div>
  </div>
  <div className='tax-service-flex'>
  <div className='acc-flex-div'>

  <img src={filling} alt=''/>
  <h3>Personal Income Tax Filing</h3>
  <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
</div>
<div className='acc-flex-div'>
    
<img src={audition} alt=''/>
    <h3>Corporate Taxation</h3>
    <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
  </div>
  <div className='acc-flex-div'>
  <img src={taxplanning} alt=''/>
 
    <h3>Tax Planning and Advisory</h3>
    <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
  </div>
  <div className='acc-flex-div'>
    
    <img src={taximg} alt=''/>
    <h3>Representation before Tax Authorities</h3>
    <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
  </div>
  <div className='acc-flex-div'>
    
    <img src={report} alt=''/>
    <h3> Compliance and Regulatory Reporting
    </h3>
    <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
  </div>
  <div className='acc-flex-div'>
    
    <img src={accountingbook} alt=''/>
    <h3>Book Keeping</h3>
    <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi Cras ultricies ligula sed magna dictum.</p>
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
  <div className='tax-content-div'>
  <p>
  We Offer a Professional Accounting Service and Record of Experience that is Unparalleled in Our Area</p>
  </div>
  <div className='law-ul'>
<h3>Company Law Consultancy</h3>
<ul>
  <li>Incorporation and Registration of Companies</li>
  <li>Corporate Governance Advisory</li>
  <li>Legal Compliance Management</li>
  <li>Drafting and Reviewing Legal Documents</li>
  <li>Company Secretarial Services</li>
</ul> 
<div>
<h3>Auditing Services</h3>
<ul>
  <li>Statutory Audits</li>
  <li>Internal Audits</li>
  <li>Tax Audits</li>
</ul> 
</div>
</div>
 </div>
  
  </main>
  )
}

export default Services




