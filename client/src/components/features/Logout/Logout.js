import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/userRedux';
import { useEffect } from 'react';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = {
    method: 'DELETE',
    credentials: 'include',
  };
  useEffect(() => {
    fetch(`${API_URL}api/auth/logout`, options).then(() => {
      dispatch(logOut());
      navigate('/');
    }, dispatch);
  });

  return null;
};

export default Logout;
