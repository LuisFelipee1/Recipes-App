import { Link, Outlet } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import { FooterTag } from './FooterStyle';

function Footer() {
  return (
    <div>
      <Outlet />
      <FooterTag data-testid="footer">
        <Link to="/drinks">
          <img 
            src={ drinkIcon } alt="drinkIcon"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <Link to="/meals">
          <img 
            src={ mealIcon }
            alt="mealIcon"
            data-testid="meals-bottom-btn"
          />
        </Link>

      </FooterTag>
    </div>

  );
}

export default Footer;
