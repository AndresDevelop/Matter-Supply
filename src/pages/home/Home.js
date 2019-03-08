import React, { useContext, useState } from 'react';
import Search from '../../components/search/search';
import Profile from '../../components/profileCard/profileCard';
import StoreContext from '../../components/store/context';
import Message from '../../components/message/message';
import Gits from '../../components/gits/Gits';
import { getUserInfo } from '../../api/api';
import { FetchUserInfo } from '../../components/store/actions';
import '../../styles/components/_home.scss';

const Home = () => {
  const context = useContext(StoreContext);
  const [userValue, setUserValue] = useState('');
  const { gits, message, dispatch } = context;
  const fetch = (value) => {
    getUserInfo(value).then(({ data }) => {
      dispatch(FetchUserInfo(data));
    });
    setUserValue(value);
  };
  return (
    <div className="home-wrapper">
      <div className="header">
        <div className="columns">
          <div className="column">
            <h1 className="home-title">Blog msco.</h1>
            <p className="home-subtitle">
              Explore the unknown. Uncover what matters. Prototype, test,
              repeat. Combine intuition with evidence. Design with intent and
              build it right.
            </p>
            <Message message={message} />
            <Search placeholder="Keyword…" searchChild={fetch} />
            {gits && gits.length > 0 ? (
              <>
                <Profile gits={gits} userInfo={userValue} />
                <Gits gits={gits} />
              </>
            ) : null}
          </div>
          <div className="column">
            <img src="https://a.icons8.com/WbaWpnhV/j4VGSN/background.svg" alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
