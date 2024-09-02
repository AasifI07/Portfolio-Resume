import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="contact__header text-center mb-12">
        <h1 className="text-4xl font-bold leading-tight">
          <span className="inline-block transition-transform transform-gpu duration-1000">C</span>
          <span className="inline-block transition-transform transform-gpu duration-1000 delay-200">O</span>
          <span className="inline-block transition-transform transform-gpu duration-1000 delay-400">N</span>
          <span className="inline-block transition-transform transform-gpu duration-1000 delay-600">T</span>
          <span className="inline-block transition-transform transform-gpu duration-1000 delay-800">A</span>
          <span className="inline-block transition-transform transform-gpu duration-1000 delay-1000">C</span>
          <span className="inline-block transition-transform transform-gpu duration-1000 delay-1200">T</span>
          <span className="inline-block transition-transform transform-gpu duration-1000 delay-1400">.</span>
        </h1>
      </div>

      <div className="contact__container grid gap-8 lg:grid-cols-2">
        <div className="contact__form bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact__form-group mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Enter name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="contact__form-group mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="contact__form-group mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Concern:</label>
              <textarea
                name="message"
                id="contact__message"
                cols="20"
                rows="5"
                placeholder="Type your message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="contact__send-btn w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </form>
        </div>

        <div className="contact__info bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h3 className="contact__info-title text-xl font-semibold mb-4">Let's Connect</h3>
          <div className="contact__info-details mb-4">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <FontAwesomeIcon icon={faLocationDot} size="2x" className="mr-3" />
                <p><span className="font-semibold">Address:&nbsp;&nbsp;</span>7A Sankaralingam Pillai Street,bank road,Melur,Madurai - 625106</p>
              </li>
              <li className="flex items-center text-gray-700">
                <FontAwesomeIcon icon={faPhone} size="2x" className="mr-3" />
                <p><span className="font-semibold">Phone:</span>&nbsp;&nbsp;(+91) 9790660707</p>
              </li>
              <li className="flex items-center text-gray-700">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-3" />
                <p><span className="font-semibold">Email:&nbsp;&nbsp;</span> iaasif.1996@gmail.com</p>
              </li>
             
            </ul>
          </div>

          <div className="contact__social flex space-x-4">
            <a
              href="http://linkedin.com/in/aasif-i-93a27913a"
            
              className="text-gray-700 hover:text-indigo-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/AasifI07"
            
              className="text-gray-700 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
