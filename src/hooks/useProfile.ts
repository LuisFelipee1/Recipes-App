import { useNavigate } from 'react-router-dom';

const useProfile = () => {
  const navigate = useNavigate();

  const handleUserMail = () => {
    const storage = localStorage.getItem('user') || '{}';
    const user = JSON.parse(storage);
    const { email } = user;
    return email;
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return { handleUserMail, handleLogout, navigate };
};

export default useProfile;
