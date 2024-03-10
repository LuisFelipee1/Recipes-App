import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/Login.css';
// import '../image.css'

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [isFormValid, setIsFormValid] = useState(Boolean);
  const [isValidPass, setIsValidPass] = useState(Boolean);
  const { email, password } = loginData;

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = target.value;
    setLoginData({ ...loginData, email: newEmail });
    validateForm(newEmail, password);
  };

  const handlePasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = target.value;
    setLoginData({ ...loginData, password: newPassword });
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail: string, newPassword: string) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    const isPasswordValid = newPassword.length > 6;
    setIsValidPass(true);
    if (!isPasswordValid) return setIsValidPass(false);
    console.log('isEmailValid', isEmailValid);
    if (isEmailValid && isPasswordValid) {
      return setIsFormValid(true);
    } else {
      return setIsFormValid(false);
    };
  };

  const handleSubmit = () => {
    if (isFormValid) {
      localStorage.setItem('user', JSON.stringify({ email: loginData.email }));
      navigate('/meals');
    }
  };

  const notValidate = 'Incorrect Fields!❌';
  const validadoInput = 'Correct fields!✅';

  return (
    <div className="body">
      <div className="divAll">
        <h1 className="app">
          <span className="recipe">Recipes</span> App
        </h1>
        <br />
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={ handleEmailChange }
          className="inputForm"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          onChange={ handlePasswordChange }
          className="inputForm"
        />
        { !isValidPass ? <p className='naoValidado'>Password must be at least 7 characters long</p> : '' }
        <br />
        <button
          data-testid="login-submit-btn"
          onClick={ handleSubmit }
          disabled={ !isFormValid }
          className="bn29"
        >
          Login
        </button>
        <br />
        { !isValidPass ? <p className='naoValidado'>{ notValidate }</p>
          : <p className='validado'>{ validadoInput }</p> }
      </div>
    </div>
  );
}

export default Login;
