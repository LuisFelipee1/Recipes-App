type ButtonProps = {
  text: string,
  onClick: () => void;
  dataTestId: string;
};

function Button({ text, onClick, dataTestId }: ButtonProps) {
  return (
    <button
      onClick={ onClick }
      data-testid={ dataTestId }
    >
      { text }
    </button>
  );
}

export default Button;
