import useFetchRecommendations from '../../hooks/useFetchRecommendation';
import {
  Title, Card, CardWrapper, Container, Name, Image } from './RecomendationsStyle';
import '../styles/recipeDetails.css';

type RecomendationsType = {
  route: string,
};

function Recomendations({ route }: RecomendationsType) {
  const { recommendations, loading } = useFetchRecommendations(route);

  return (
    <div className='CardRecommend'>
      <Container>
      <div className="recommendations">
        {!loading && (<Title><h1>Recommended</h1></Title>)}
        <div>
          {route === '/drinks' && (
            <CardWrapper>
              {recommendations.meals && recommendations.meals.slice(0, 6)
                .map((meal, index) => (
                  <Card
                    data-testid={ `${index}-recommendation-card` }
                    key={ meal.idMeal }
                  >
                    <Image src={ meal.strMealThumb } alt={ meal.strMeal } />
                    <Name
                      data-testid={ `${index}-recommendation-title` }
                    >
                      {meal.strMeal}
                    </Name>
                  </Card>
                ))}
            </CardWrapper>
          )}

          {route === '/meals' && (
            <CardWrapper>
              {recommendations.drinks && recommendations.drinks.slice(0, 6)
                .map((drink, index) => (
                  <Card
                    data-testid={ `${index}-recommendation-card` }
                    key={ drink.idDrink }
                  >

                    <Image src={ drink.strDrinkThumb } alt={ drink.strDrink } />
                    <Name
                      data-testid={ `${index}-recommendation-title` }
                    >
                      {drink.strDrink}
                    </Name>

                  </Card>
                ))}
            </CardWrapper>
          )}
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Recomendations;
