import { Container, Button, Img } from './ButtonFavoriteRecipesStyles';

type ButtonProps = {
  imgSrc: string;
  altText: string;
  buttonText: string;
  datatestid: string;
  onClick: () => void;
};

function ButtonFavoriteRecipes({ imgSrc, altText, buttonText, datatestid,
  onClick }: ButtonProps) {
  return (
    <Container>
      <Button
        onClick={ onClick }
        data-testid={ datatestid }
      >
        <Img src={ imgSrc } alt={ altText } />
      </Button>
      <p>{buttonText}</p>
    </Container>
  );
}

export default ButtonFavoriteRecipes;
