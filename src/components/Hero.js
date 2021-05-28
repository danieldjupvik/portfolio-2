import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='hero-wrapper'>
        <div className='hero__intro'>
          <h1 className='hero__intro--heading'>
            <span className='hero__intro--span'>Hi,</span>
            <span className='hero__intro--span'>
              I’m
              <span className='hero__intro--name' id='typedtext'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Daniel').start();
                  }}
                />
              </span>
              ,
            </span>
            <span className='hero__intro--span'>
              a developer<span className='hero__intro--dot'>.</span>
            </span>
          </h1>
        </div>
        <div className='buttons'>
          <a href='mailto:daniel_22@icloud.com' className='buttons--contact-me'>
            Contact me
          </a>
          <a href='#projects' className='buttons--projects'>
            {' '}
            My Projects{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
