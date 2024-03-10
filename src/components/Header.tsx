import { useLocation, useNavigate } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import './styles/Header.css';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const shouldShowSearchIcon = () => {
    return !['/profile', '/done-recipes', '/favorite-recipes'].includes(pathname);
  };

  const handleClickProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="head">
      <div className='profileBar'>
        <button
          type="button"
          onClick={ handleClickProfile }
          className="btn btn-outline-warning"
        >
          <img
            src={ profileIcon }
            alt="profile icon"
            data-testid="profile-top-btn"
          />
        </button>
        {shouldShowSearchIcon() && (
          <span>
            <SearchBar />
          </span>
        )}
      </div>
      { pathname === '/meals' && <h1 className='name'>MEALS</h1>}
      { pathname === '/drinks' && <h1 className='name'>DRINKS</h1>}
      { pathname === '/done-recipes' && <h1 className='name'>DONE RECIPES</h1>}
    </div>
  );
}
