import { TiTick } from 'react-icons/ti';
import '../Style/Navbar.css'; // Updated file name
import logo from '../assets/Sicher Shared logo Final.png';
import bgacc from '../assets/Red Grayscale Subtle Gradient Upcoming Live Event Webinar Animated Linkedin Carousel Ad.png';
import { useLocation } from 'react-router-dom';


const IconCard = ({ label }) => (
  <div className="icons-sub-div">
    <div className="icon-bg">
      <TiTick />
    </div>
    <p>{label}</p>
  </div>
);

const NavBar = () => {
// const page=useLocation()
// console.log(page)

  return (
    <div>
      {/* Background Section */}
      <div className="nav-bg-div" style={{backgroundColor:"#30C7B5"}}>
        {/* <nav className="navbar"> */}
          <div className="nav-header">
            {/* Logo Section */}
            <div className="nav-logo">
              <img src={logo} alt="Sicher Logo" className="logo" />
            </div>

            {/* Navigation Menu */}
            <ol>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Why Choose Me</li>
              <li>Testimonial</li>
              <li>Contact</li>
            </ol>
          </div>
         
        {/* </nav> */}
        {/* <hr className="hr-line" /> */}
        {/* Sicher Header Content */}
        <div className="sicher-header">
         <div className="sicher-content">
            <h1>SICHER SHARED SERVICES</h1>
            <h5>Practical Financial Advice You Can Count On</h5>
            <p className=''>Invest your time and efforts in running your business.
           <br></br> Leave the accounting to me.</p>
            <div className="btn-div">
              <button className="free-qoute-btn">Get A Free Quote</button>
              <button className="more-btn">Learn More</button>
            </div>
            <div className="icon-div">
              <IconCard label="Trusted" />
              <IconCard label="Experienced" />
              <IconCard label="Professional" />
            </div>
          </div>

             {/* Image Section */}
             <div className="sicher-img">
            {/* <img src={bgacc} alt="Background Accountant" /> */}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default NavBar;
