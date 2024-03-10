import { ButtonsWrapper, Button } from './CardButtonsStyle';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import handleCopuToClipBoard from '../../utils/handleCopyToClipBoard';
import { FavoriteRecipe } from '../../types';

type CardButtonsProp = {
  recipe: FavoriteRecipe,
  index: number,
  handleRemoveFavorite: () => void;
};

function CardButtons({ recipe, index, handleRemoveFavorite }: CardButtonsProp) {
  return (
    <ButtonsWrapper>
      <Button onClick={ () => handleCopuToClipBoard(recipe) }>
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share"
        />
      </Button>
      <Button onClick={ handleRemoveFavorite }>
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="Favorite"
        />
      </Button>
    </ButtonsWrapper>
  );
}

export default CardButtons;
