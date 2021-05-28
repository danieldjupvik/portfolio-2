import movieWatch from '../assets/project-logo/MovieWatcht.png';
import infracity from '../assets/project-logo/infracity.png';
import gameNow from '../assets/project-logo/semester-project-2-logo.png';
import lasr from '../assets/project-logo/LASR-logo.png';
import eduplaytion from '../assets/project-logo/eduplay-logo.png';
import bergenTekniske from '../assets/project-logo/BERGENS-TEKNISKE-MUSEUM.png';
import holidaze from '../assets/project-logo/Holidaze-logo-white.png';
import profilePicture from '../assets/img/profile-picture.jpeg';
import { Link } from 'react-router-dom';

const Projects = () => {
  const born = 1998;
  var d = new Date();
  const year = d.getFullYear();
  const myAge = year - born;

  return (
    <div className='container'>
      <div className='main__heading'>
        <h1 className='main__heading--h1' id='projects'>
          <span className='main__heading--firstWord'>My</span> projects
          <span className='main__heading--dot'>.</span>
        </h1>
      </div>
      <div className='projects'>
        <div className='projects__box'>
          <div className='projects__box--text-div'>
            <p className='projects__box--text'>Project Exam 2</p>
          </div>
          <a
            href='https://holidaze.danieldjupvik.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='projects__box--img-div'>
              <img
                src={holidaze}
                alt='Holidaze'
                className='projects__box--img'
              />
            </div>
          </a>
        </div>
        <div className='projects__box'>
          <div className='projects__box--text-div'>
            <p className='projects__box--text'>MovieWatcht (App)</p>
          </div>

          <Link to='moviewatcht'>
            <div className='projects__box--img-div'>
              <img
                src={movieWatch}
                alt='MovieWatch'
                className='projects__box--img'
              />
            </div>
          </Link>
        </div>
        <div className='projects__box'>
          <div className='projects__box--text-div'>
            <p className='projects__box--text'>Infracity (freelance)</p>
          </div>
          <a
            href='https://www.infracity.ai/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='projects__box--img-div'>
              <img
                src={infracity}
                alt='Infracity'
                className='projects__box--img'
              />
            </div>
          </a>
        </div>
        <div className='projects__box'>
          <div className='projects__box--text-div'>
            <p className='projects__box--text'>Semester Project 2</p>
          </div>
          <a
            href='https://gamenow.danieldjupvik.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='projects__box--img-div'>
              <img
                src={gameNow}
                alt='Game Now'
                className='projects__box--img'
              />
            </div>
          </a>
        </div>
        <div className='projects__box'>
          <div className='projects__box--text-div'>
            <p className='projects__box--text'>Project Exam 1</p>
          </div>
          <a
            href='https://lasr.danieldjupvik.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='projects__box--img-div'>
              <img src={lasr} alt='LASR' className='projects__box--img' />
            </div>
          </a>
        </div>
        <div className='projects__box'>
          <div className='projects__box--text-div'>
            <p className='projects__box--text'>Semester Project 1</p>
          </div>
          <a
            href='https://eduplaytion.danieldjupvik.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='projects__box--img-div'>
              <img
                src={eduplaytion}
                alt='Eduplaytion'
                className='projects__box--img'
              />
            </div>
          </a>
        </div>
        <div className='projects__box'>
          <div className='projects__box--text-div'>
            <p className='projects__box--text'>Design 2 CA</p>
          </div>
          <a
            href='https://www.figma.com/proto/sMGkmJ7h6nQfLpTviN2e0U/Bergens-Tekniske-Museum-CA?node-id=53%3A21&viewport=432%2C514%2C0.6079582571983337&scaling=min-zoom'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='projects__box--img-div'>
              <img
                src={bergenTekniske}
                alt='Bergen Tekniske'
                className='projects__box--img'
              />
            </div>
          </a>
        </div>
      </div>
      <div className='main__heading about'>
        <h1 className='main__heading--h1'>
          <span className='main__heading--firstWord' id='about'>
            About
          </span>{' '}
          me<span className='main__heading--dot'>.</span>
        </h1>
      </div>
      <div className='about-section'>
        <img
          className='about-section--img'
          src={profilePicture}
          alt='profile'
        />
        <p className='about-section--paragraph'>
          My name is Daniel and Im a {myAge} year old man from Gursken,
          Sunnmøre. Currently living in Bergen, Norway and studying Front-end
          development at Noroff - School of technology and digital media. My
          interest's are everything from PC, server and web development, in my
          part time I run a personal server.
        </p>
      </div>
      <div className='main__heading'>
        <h2 className='main__heading--h1'>
          <span className='main__heading--firstWord'>My</span> skills
          <span className='main__heading--dot'>.</span>
        </h2>
      </div>
      <div className='my-skills'>
        <a
          href='https://en.wikipedia.org/wiki/HTML'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='my-skills--box'>HTML</div>
        </a>
        <a
          href='https://en.wikipedia.org/wiki/CSS'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='my-skills--box'>CSS</div>
        </a>
        <a
          href='https://en.wikipedia.org/wiki/React_(JavaScript_library)'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='my-skills--box'>React.js</div>
        </a>
        <a
          href='https://en.wikipedia.org/wiki/React_Native'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='my-skills--box'>React Native</div>
        </a>
        <a
          href='https://no.wikipedia.org/wiki/JavaScript'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='my-skills--box'>JavaScript</div>
        </a>
        <a
          href='https://en.wikipedia.org/wiki/Sass_(stylesheet_language)'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='my-skills--box'>SASS</div>
        </a>
      </div>
      <div className='main__heading'>
        <h3 className='main__heading--h1'>
          <span className='main__heading--firstWord'>Contact</span> me
          <span className='main__heading--dot'>.</span>
        </h3>
      </div>
      <div className='contact-me-wrapper'>
        <div className='contact-me'>
          <div className='contact-me__box'>
            <i className='fas fa-at'></i>
            <a href='mailto:daniel_22@icloud.com'>E-mail</a>
          </div>
          <div className='contact-me__box'>
            <i className='fab fa-facebook-f'></i>
            <a href='https://www.facebook.com/DanielSaetre/'>Facebook</a>
          </div>
          <div className='contact-me__box'>
            <i className='fab fa-linkedin-in'></i>
            <a href='https://www.linkedin.com/in/daniel-djupvik-sætre-4560a5181'>
              LinkedIn
            </a>
          </div>
          <div className='contact-me__box'>
            <i className='fas fa-code-branch'></i>
            <a href='https://github.com/danieldjupvik'>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
