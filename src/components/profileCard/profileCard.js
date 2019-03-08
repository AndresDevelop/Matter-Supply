import React, { useContext } from 'react';
import '../../styles/components/_profileCard.scss';
import StoreContext from '../store/context';

const profileCard = () => {
  const { user } = useContext(StoreContext);
  return (
    <React.Fragment>
      <div className="profile">
        <figure className="image is-71x70">
          <img className="is-rounded" src={user.avatar_url} alt="avatar" />
        </figure>
        <div className="posts">
          <h1 className="user">{user.login}</h1>
          <span>Posts</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default profileCard;
