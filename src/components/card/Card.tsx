import { useContext } from 'react';
import { ButtonsWrapper, Container, Img, Wrapper, Name, Infos,
  Nationality } from './CardStyles';
import CardButtons from '../cardButtons/CardButtons';
import FilterContext from '../../context/FilterContext';
import useNavigateToDetails from '../../hooks/useNavigateToDetails';

function Card() {
  const { handleRemoveFavorite, filteredFavorites } = useContext(FilterContext);
  const handleImageClick = useNavigateToDetails();

  return (
    <div>
      {filteredFavorites.map((recipe, index) => (
        <Container key={ recipe.id }>
          <Img
            data-testid={ `${index}-horizontal-image` }
            src={ recipe.image }
            alt={ recipe.name }
            onClick={ () => handleImageClick(recipe) }
          />
          <Wrapper>
            <Infos>
              <Name
                onClick={ () => handleImageClick(recipe) }
                data-testid={ `${index}-horizontal-name` }
              >
                {recipe.name}
              </Name>
              {recipe.type === 'meal' ? (
                <Nationality
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${recipe.nationality} - ${recipe.category}`}
                </Nationality>
              ) : (
                <Nationality
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`Alcoólica: ${recipe.alcoholicOrNot}`}

                </Nationality>
              )}
            </Infos>
            <ButtonsWrapper>
              <CardButtons
                handleRemoveFavorite={ () => handleRemoveFavorite(recipe.id) }
                recipe={ recipe }
                index={ index }
              />
            </ButtonsWrapper>
          </Wrapper>
        </Container>
      ))}
    </div>
  );
}

export default Card;
