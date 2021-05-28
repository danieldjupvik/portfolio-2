import { Link, useHistory } from 'react-router-dom';
import movieWatchtScreenshot from '../assets/img/movieWatcht-screenshot.PNG';
import downloadAppStore from '../assets/img/app-store.png';
import downloadGooglePlay from '../assets/img/download-google-play-store-logo.png';

const MovieWatcht = () => {
  document.title = 'Daniel | MovieWatcht';
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className='container'>
      <div style={{ color: 'white', marginTop: '30px' }}>
        <div onClick={goBack} style={{ cursor: 'pointer' }}>
          Go back
        </div>
      </div>
      <div className='main__heading'>
        <h1 className='main__heading--h1'>
          <span className='main__heading--firstWord'>App</span> MovieWatcht
          <span className='main__heading--dot'>.</span>
        </h1>
      </div>

      <div
        style={{
          width: '250px',
          margin: '0 auto',
          boxShadow: '0 0 35px 1px black',
        }}
      >
        <img
          style={{ borderRadius: '10px' }}
          src={movieWatchtScreenshot}
          alt='moviewatcht screenshot'
        />
      </div>
      <div
        style={{
          color: 'white',
          maxWidth: '450px',
          margin: '0 auto',
          marginTop: '40px',
        }}
      >
        <p>
          MovieWacht is a movie and series information app powered by TMDb.
          Where you can discover new movies and save movies to Watch List for a
          to-do list for movies and series.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '60px',
          marginBottom: '60px',
        }}
      >
        <div>
          <a href='https://apps.apple.com/us/app/moviewatcht/id1559449586'>
            <img
              style={{
                maxWidth: '200px',
                minWidth: '150px',
                marginRight: '20px',
              }}
              src={downloadAppStore}
              alt='download App Store'
            />
          </a>
        </div>
        <div>
          <a href='https://play.google.com/store/apps/details?id=com.danieldjupvik.MovieWatcht&hl'>
            <img
              style={{
                maxWidth: '200px',
                minWidth: '170px',
              }}
              src={downloadGooglePlay}
              alt='download Google Play'
            />
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '30px', color: 'white' }}>
        <Link to='privacy'>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default MovieWatcht;
