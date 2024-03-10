import useProfile from '../../hooks/useProfile';
import logout from '../../images/logout.svg';
import favorite from '../../images/favorite.svg';
import done from '../../images/done.svg';
import icoProfile from '../../images/Perfil.svg';
import returnIcon from '../..//images/arrow_back_white_24dp.svg';
import '../styles/profile.css';

function ButtonsProfile() {
  const { handleUserMail, handleLogout, navigate } = useProfile();

  return (
    <div className='profileAll'>
      <div className="listprofile">
        <div>
          <img src={ icoProfile } alt="Favorite" />
          <h1
            className='nameProfile'
          >
            Profile
          </h1>
        </div>
        <div>
          <p
            data-testid="profile-email"
            className='nameProfile'
          >
            { handleUserMail() }
          </p>
        </div>
          <div className='returnTop'>
            <div className='imageIcon'>
              <img 
                src={ returnIcon } alt="return" className='imgReturns'
              />
            </div>
              <button 
                onClick={ () => navigate('/meals') } 
                className='btn btn-outline-danger'
              >
                return to top
              </button>
          </div>
        <div className='flex'>
          <br />
          <div className='imageIcon'>
            <img src={ done } alt="favorites" />
          </div>
          <div>
            <button 
              onClick={ () => navigate('/done-recipes') }
              className='btnsProfile'
            >
              Done Recipes
            </button>
          </div>
        </div>
        <div />
        <div className='flex'>
          <div className='imageIcon'>
            <img src={ favorite } alt="favorites" />
          </div>
          <div>
            <button 
              onClick={ () => navigate('/favorite-recipes') }
              className='btnsProfile'
            >
              favorite Recipes
            </button>
          </div>
        </div>
        <div className='flex'>
          <div className='imageIcon'>
            <img src={ logout } alt="logout" />
          </div>
          <div>
            <button 
              onClick={ handleLogout } 
              className='btnsProfile'
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonsProfile;
