import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { AuthContext } from '../../context/auth/AuthContext';
import SettingsHeader from '../../components/common/globalHeader/GlobalHeader';

const Settings = () => {
  // const history = useHistory();
  // const authContext = useContext(AuthContext);
  // const { currentUser } = authContext;

  // useEffect(() => {
  //   if (currentUser && !currentUser.is_completed)
  //     history.push('/update-profile');
  // }, [currentUser, history]);

  return (
    <div>
      <SettingsHeader text="Settings" />
    </div>
  );
};

export default Settings;
