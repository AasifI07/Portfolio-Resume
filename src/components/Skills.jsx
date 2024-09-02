import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const Skills = () => {
  useEffect(() => {
    const container = '.tagcloud';
    let radii;
    let isInitialized = false;

    const updateTagCloud = () => {
      radii = window.innerWidth <= 778 ? 150 : 290;

      const options = {
        radius: radii,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };
      document.querySelector(container).innerHTML = '';

      TagCloud(container, texts, options);
      isInitialized = true;
    };

    const texts = [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React JS',
      'ES6',
      'GIT',
      'GITHUB',
      'React Native'
    ];

    updateTagCloud();

    window.addEventListener('resize', updateTagCloud);

    return () => {
      window.removeEventListener('resize', updateTagCloud);
    };
  }, []);

  return (
    <div className="skill py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="skill__header mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold">
            <span className="inline-block transition-transform transform" data-aos="fade-down" data-aos-delay="0">S</span>
            <span className="inline-block transition-transform transform" data-aos="fade-down" data-aos-delay="200">K</span>
            <span className="inline-block transition-transform transform" data-aos="fade-down" data-aos-delay="400">I</span>
            <span className="inline-block transition-transform transform" data-aos="fade-down" data-aos-delay="600">L</span>
            <span className="inline-block transition-transform transform" data-aos="fade-down" data-aos-delay="800">L</span>
            <span className="inline-block transition-transform transform" data-aos="fade-down" data-aos-delay="1000">.</span>
          </h1>
        </div>
        <div className="skill__inner-container lg:flex lg:gap-8">
          <div className="skill__info lg:w-1/2">
            <div className="skill__details-container space-y-8">
              <div className="skill__details">
                <h4 className="text-xl font-semibold mb-2">HTML / CSS</h4>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li><span>HTML5, CSS3</span></li>
                 
                </ul>
              </div>
              <div className="skill__details">
                <h4 className="text-xl font-semibold mb-2">JavaScript</h4>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li><span><b>Frameworks & Libraries:</b> React JS, React Native.</span></li>
                  <li><span>ES5/ES6</span></li>
                  <li><span>Node.js</span></li>
                  <li><span>Typescript</span></li>
                </ul>
              </div>
              <div className="skill__details">
                <h4 className="text-xl font-semibold mb-2">Version Control Systems</h4>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li><span>GIT</span></li>
                </ul>
              </div>
             
              <div className="skill__details">
                <h4 className="text-xl font-semibold mb-2">Server Side</h4>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li><span>Node.js - <span className='text-gray-500'>Beginner</span></span></li>
                  <li><span>Express.js - <span className='text-gray-500'>Beginner</span></span></li>
                  <li><span>MongoDB - <span className='text-gray-500'>Beginner</span> </span></li>
                </ul>
              </div>
            </div>
          </div>

       
          <div className="skill__cloud lg:w-1/2 flex items-center justify-center">
            <div className="tagcloud w-full h-full" data-aos="zoom-in-up" data-aos-offset="100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
