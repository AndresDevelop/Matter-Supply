import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../store/context';

import '../../styles/components/_header.scss';

const Header = () => {
  const { user, logging } = useContext(StoreContext);

  const Auth = () => {
    window.open(
      'https://github.com/login/oauth/authorize?client_id=3423e5cdc6d5b000f48e&scope=gist',
      '_self'
    );
  };

  const logOut = () => {
    localStorage.removeItem('token');
    window.open('http://localhost:3000/', '_self');
  };

  return (
    <header className="header-wrapper">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <div className="navbar-item">
              <img
                src="https://a.icons8.com/WbaWpnhV/W9K0FK/logo.svg"
                width="112"
                height="28"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu is-block">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {logging ? (
                  <React.Fragment>
                    <figure className="image is-71x70">
                      <img
                        className="is-rounded"
                        alt="avatar"
                        src={
                          user.avatar_url
                          || 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Sad_face.svg'
                        }
                      />
                    </figure>
                    <button className="button" type="button" onClick={logOut}>
                      <strong>Log Out</strong>
                    </button>
                  </React.Fragment>
                ) : (
                  <button className="button" type="button" onClick={Auth}>
                    <strong>Sign In</strong>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
