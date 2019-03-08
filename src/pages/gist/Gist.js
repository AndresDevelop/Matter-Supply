import React, {
  useEffect,
  useContext,
} from 'react';
import StoreContext from '../../components/store/context';
import { getGitDetail } from '../../api/api';
import { FetchGitsDetail } from '../../components/store/actions';
import Profile from '../../components/profileCard/profileCard';
import GitsDetail from '../../components/gitsDetail/GitsDetail';

const Gist = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const context = useContext(StoreContext);
  const { dispatch, git } = context;
  useEffect(() => {
    getGitDetail(id).then(({ data }) => {
      dispatch(FetchGitsDetail(data));
    });
  }, []);
  return (
    <div className="home-wrapper">
      <div className="header">
        <div className="columns">
          <div className="column">
            {git && <GitsDetail gitData={git} />}
            <Profile />
          </div>
          <div className="column">
            <img src="https://a.icons8.com/WbaWpnhV/LaVZcW/background.svg" alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gist;
