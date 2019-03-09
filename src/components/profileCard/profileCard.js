import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../store/context';

import '../../styles/components/_profileCard.scss';

const profileCard = () => {
  const { user, logging } = useContext(StoreContext);
  return (
    <React.Fragment>
      <div className="profile">
        <figure className="image is-71x70">
          <img className="is-rounded" src={user.avatar_url} alt="avatar" />
        </figure>
        <div className="data-post is-block-mobile">
          <div className="posts">
            <h1 className="user">{user.login}</h1>
            <span>Posts</span>
          </div>
          {logging ? (
            <Link to="/createGists">
              <button type="button">
                <span>Create new post</span>
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default profileCard;
