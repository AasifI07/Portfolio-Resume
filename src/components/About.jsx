import React from "react";
import { Link } from 'react-router-dom'; 
import 'tailwindcss/tailwind.css';

const About = () => {
  return (
    <div className="about py-12 px-4 sm:px-6 lg:px-8" id="about">
      <div className="about__container mx-auto max-w-7xl">
        <div className="about__header text-center" id="about__heading">
          <h1 className="text-4xl font-bold mb-6">
            <span className="inline-block transition-transform duration-1000 transform-gpu" style={{ transform: 'translateY(0px)' }}>A</span>
            <span className="inline-block transition-transform duration-1000 transform-gpu" style={{ transform: 'translateY(0px)', transitionDelay: '200ms' }}>B</span>
            <span className="inline-block transition-transform duration-1000 transform-gpu" style={{ transform: 'translateY(0px)', transitionDelay: '400ms' }}>O</span>
            <span className="inline-block transition-transform duration-1000 transform-gpu" style={{ transform: 'translateY(0px)', transitionDelay: '600ms' }}>U</span>
            <span className="inline-block transition-transform duration-1000 transform-gpu" style={{ transform: 'translateY(0px)', transitionDelay: '800ms' }}>T</span>
            <span className="inline-block transition-transform duration-1000 transform-gpu" style={{ transform: 'translateY(0px)', transitionDelay: '1000ms' }}>.</span>
          </h1>
        </div>

        <div className="about__details-container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="about__details bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
            <Link to="/about/intro">
              <h1 className="text-2xl font-semibold">
                0<span>1</span>
              </h1>
              <h2 className="text-xl mt-2 font-semibold">
                H<span>ello,</span>
              </h2>
              <p className="mt-2 text-gray-700">
                I am <span className="font-semibold"> Asif Alikhan I</span> <br /> Highly passionate
                front-end Developer with more than 1.5 years of experience.
              </p>
            </Link>
          </div>

          <div className="about__details bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
            <Link to="/about/experience">
              <h1 className="text-2xl font-semibold">
                0<span>2</span>
              </h1>
              <h2 className="text-xl mt-2 font-semibold">
                E<span>xperience</span>
              </h2>
              <h1 className="text-xl mt-2 font-semibold">
              Flyers Soft Private Limited
              </h1>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">6 months of experience as A Trainee Junior Software Developer.</span>
                <br /> I have worked in Major Projects and my Contribution is Much Appreciated. And I also worked as A Shadow Resources in many other Minor Projects. 
              </p>
            </Link>
          </div>

          <div className="about__details bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
            <Link to="/about/internships">
              <h1 className="text-2xl font-semibold">
                0<span>3</span>
              </h1>
              <h2 className="text-xl mt-2 font-semibold">
                I<span>nternships</span>
              </h2>
              <h1 className="text-xl mt-2 font-semibold">
              Flyers Soft Private Limited
              </h1>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">6 months of experience as Intern.</span>
                <br /> I have get into IT field as a Intern Frontend Developer. I have Learned HTML, CSS, JavaScript and React JS. 
              </p>
            </Link>
          </div>

          <div className="about__details bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
            <Link to="/about/graduation">
              <h1 className="text-2xl font-semibold">
                0<span>4</span>
              </h1>
              <h2 className="text-xl mt-2 font-semibold">
                E<span>ngineering</span>
              </h2>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">BSA Crescent Institute of Science and Technology.</span>
                <br />
                I have Completed my Mechanical Engineering Degree with First Class in 2019 with 72% of CGPA.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
