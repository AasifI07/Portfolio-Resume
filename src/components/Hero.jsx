import React, { useEffect } from 'react';
import Myself from '../assets/images/myself.png';

const Hero = () => {
  useEffect(() => {
    const alphabets = document.querySelectorAll('.hero__alphabet');
    alphabets.forEach((alphabet) => {
      alphabet.addEventListener('animationend', () => {
        alphabet.classList.remove('animate-alphabet');
      });
      alphabet.addEventListener('mouseover', () => {
        alphabet.classList.add('animate-alphabet');
      });
    });

    return () => {
      alphabets.forEach((alphabet) => {
        alphabet.removeEventListener('animationend', () => {
          alphabet.classList.remove('animate-alphabet');
        });
        alphabet.removeEventListener('mouseover', () => {
          alphabet.classList.add('animate-alphabet');
        });
      });
    };
  }, []);

  return (
    <div className="hero bg-gray-900 text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8">
        <div className="hero__intro-box text-center lg:text-left lg:w-1/2">
          <p className="hero__intro-title text-3xl lg:text-4xl font-bold mb-4">
            <span className="block h-1 bg-indigo-500 w-16 mb-2 mx-auto lg:mx-0"></span>
            Hello, I am Name
          </p>
          <div className="hero__animated-alphabet-box flex flex-wrap justify-center lg:justify-start">
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="200">F</span>
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="400">R</span>
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="600">O</span>
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="800">N</span>
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="1000">T</span>
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="1200">E</span>
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="1400">N</span>
            <span className="hero__alphabet text-4xl lg:text-5xl font-bold mx-1 animate-opacity" data-aos="fade-up" data-aos-delay="1600">D</span>
            <span className="hero__developer-text text-xl lg:text-2xl font-bold mt-4" data-aos="zoom-out-down" data-aos-delay="1800">
              <span className="hero__dev-text">Developer</span>
            </span>
          </div>
          <div className="hero__description mt-8 text-lg lg:text-xl" data-aos="fade" data-aos-delay="1800">
            <p>
              I'm a passionate and responsible <span className="font-semibold">Front-End Developer</span>, with more than 1.5 years of experience. Skilled in developing highly responsive websites and mobile apps with elegant and efficient code.
            </p>
          </div>
          <div className="hero__buttons mt-8 flex flex-col gap-4 items-center lg:flex-row lg:gap-6 lg:justify-center">
            <a
              className="hero__know-btn bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
              href="#about"
              data-aos="fade-up"
              data-aos-delay="1800"
            >
              Know more
            </a>
            <a
              className="hero__contact-btn bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              href="#contact"
              data-aos="fade-up"
              data-aos-delay="2000"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="hero__image lg:w-1/2 mt-8 lg:mt-0" data-aos="zoom-in" data-aos-delay="200">
        <img src={Myself} alt="me" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
