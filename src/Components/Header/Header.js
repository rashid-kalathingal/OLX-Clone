import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';

const Header = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    history.push('/login');
  };

  const handleSell = () => {
    history.push('/create');
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find car, mobile phone and more..." />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        <div className="loginPage">
          <span onClick={user ? handleLogout : handleLogin}>{user ? `Welcome ${user.displayName}` : 'Login'}</span>
          <hr />
        </div>
        {user && (
          <span onClick={handleLogout}>
            Logout
          </span>
        )}
        <div className="sellMenu" onClick={handleSell}>
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
