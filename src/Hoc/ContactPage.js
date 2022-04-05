import React from 'react';
import contactImage from '../img/firmbee-com-SpVHcbuKi6E-unsplash.jpg';


function ContactPage() {
  return (
    <div className='container contactPage'>
        <h2>Contact Us</h2>
        <figure>
            <img src={contactImage} alt="contact us" />
        </figure>
        <form>
            <div className="input_group">
                <label>
                    Name
                </label>
                <input type="text" />
            </div>
            <div className="input_group">
                <label>
                    Email
                </label>
                <input type="email" />
            </div>
            <div className="input_group">
                <label>
                    Message
                </label>
                <textarea id="" cols="30" rows="10"></textarea>
            </div>
            <button>
                Send
            </button>
        </form>
    </div>
  )
}

export default ContactPage