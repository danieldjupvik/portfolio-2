import logo from '../assets/icon/portfolio-v2-logo.png';

const Navigation = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar__wrapper'>
            <div className='navbar__logo-wrapper'>
              <img className='navbar__logo' src={logo} alt='Daniel Logo' />
            </div>
            <div className='navbar__navigation-wrapper'>
              <ul className='navbar__navigation'>
                <li className='navbar__navigation--list'>
                  <a href='#home' className='navbar__navigation--link'>
                    <i
                      className='
                    fas
                    fa-home
                    navbar__navigation--icon
                    home-link
                    active
                  '
                    ></i>
                  </a>
                </li>
                <li className='navbar__navigation--list'>
                  <a href='#projects' className='navbar__navigation--link'>
                    <i className='fas fa-code navbar__navigation--icon projects-link'></i>
                  </a>
                </li>
                <li className='navbar__navigation--list'>
                  <a href='#about' className='navbar__navigation--link'>
                    <i
                      className='
                    fas
                    fa-address-card
                    navbar__navigation--icon
                    about-link
                  '
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
