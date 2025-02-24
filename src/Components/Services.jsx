import React from 'react'
import "../Style/Services.css";
import img1 from'../assets/Wavy_Bus-21_Single-01.jpg'
const Services = () => {
  return (
  <main className='services-main'>
    <div className='services-header-content'>
      <h4>Welcome to Sicher</h4>
      <h2>Customized Financial Planning & Investing</h2>
      <p>We provide customized strategies to help you grow, manage, and secure your wealth. With expert guidance and tailored solutions, we ensure your investments align with your goals. Whether you're planning for the future or optimizing your current finances, we make the process seamless and effective.</p>
    </div>

    <div className='services-img-div'>
      <img src={img1}/>
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
