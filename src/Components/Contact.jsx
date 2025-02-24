import React from 'react';
import "../Style/Contact.css";
import bgimg from '../assets/ssssss.svg'; // Replace with your background image
import img1 from '../assets/accountant-1.png'; // Replace with your person image

const Contact = () => {
    return (
        <div className="contact-container">
            {/* Background Section */}
            <div className="bg-div-contact">
              <img src={bgimg} alt=''/>
            </div>

            {/* Foreground Image Section */}
         <div className="acc-img-div">
                <img src={img1} alt="Person" className="acc-img1" />
            </div> 

            {/* Form Section */}
            <div className="form-container">
                <h3>FREE ESTIMATION</h3>
                <h1>Request A Quote</h1>
                <form>
                    <input type="text" placeholder="Name*" />
                    <input type="email" placeholder="Email*" />
                    <input type="tel" placeholder="Phone Number*" />
                    <input type="number" placeholder="Number of Employees*" />
                    <input type="number" placeholder="Number of Incoming Invoices*" />
                    <input type="number" placeholder="Number of Outgoing Invoices*" />
                    <button type="submit">Get a Free Quote</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
