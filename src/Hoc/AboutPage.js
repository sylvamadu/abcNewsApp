import React from 'react';
import aboutImage from '../img/mimi-thian-vdXMSiX-n6M-unsplash.jpg';

function AboutPage() {
  return (
    <div className='container aboutPage'>
        <h2>About Us</h2>
        <figure>
            <img src={aboutImage} alt="about us" />
        </figure>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus perspiciatis aliquid iste facilis tenetur laboriosam voluptas natus incidunt esse recusandae officiis culpa rerum cum, dolore libero doloribus numquam aliquam maxime!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus perspiciatis aliquid iste facilis tenetur laboriosam voluptas natus incidunt esse recusandae officiis culpa rerum cum, dolore libero doloribus numquam aliquam maxime!</p>
    </div>
  )
}

export default AboutPage