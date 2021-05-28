import logo from '../assets/icon/portfolio-v2-logo.png';
const Overlay = () => {
  const quoteArray = [
    'Spinning up the hamster wheel',
    'Loading Battlestation...',
    'RE-calibrating the internet...',
    'Downloading more RAM',
    "At least you're not on hold",
    "I could've been faster in C++",
    "I'll be here all week",
    'You still here?',
  ];

  const quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

  return (
    <div id='overlay'>
      <div className='container'>
        <img className='navbar__logo' src={logo} alt='Daniel Logo' />
        <p id='quotes'>{quote}</p>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
