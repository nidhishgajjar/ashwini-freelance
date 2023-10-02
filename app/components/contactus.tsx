'use client'

import { FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactUs: React.FC = () => {
    const location = {
        address: 'Plot No. 1, Sector 21, Faridabad, Haryana 121001',
        lat: 28.3917,
        lng: 77.3131,
    };

    const googleMapsUrl1 = `https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`;

    

  return (
    <section id="contact-us" className="p-5 bg-neutral-50">
        <div className="container mx-auto">
        <h2 className="text-2xl md:text-5xl font-medium text-center mt-16 font-mono mb-20 text-neutral-700">Contact</h2>

        <div className="card">
            <div className="card-body">
            <iframe
                title="Google Maps"
                width="100%"
                height="300"
                src={googleMapsUrl1}
                allowFullScreen
            />
            </div>
        </div>


        <hr className="my-10" />

        <h4 className="text-xl md:text-3xl text-left mb-10 font-mono text-neutral-700">Inquiry Form</h4>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="90aeddbb-1c75-4912-9230-983585606ddb" />

            <div className="mb-4">
                <input className="input input-bordered w-full bg-neutral-50" type="text" name="name" placeholder="Name" required />
            </div>
            <div className="mb-4">
                <input className="input input-bordered w-full bg-neutral-50" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="mb-4">
                <input className="input input-bordered w-full bg-neutral-50" type="tel" name="phone" placeholder="Phone Number" />
            </div>
            <div className="mb-4">
                <textarea className="textarea textarea-bordered w-full bg-neutral-50" name="message" placeholder="Message" rows={4} required></textarea>
            </div>
            <div className="h-captcha" data-captcha="true"></div>
            <div className="text-right">
                <button className="bg-red-900 p-3 rounded-lg text-white hover:scale-95" type="submit">Submit</button>
            </div>
        </form>

        <div className="flex justify-center mt-14">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 mx-2 text-neutral-600" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 mx-2 text-neutral-600" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 mx-2 text-neutral-600" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 mx-2 text-neutral-600" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
