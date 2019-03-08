import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, monthDifference } from '../../utils/date';

import '../../styles/components/_gits.scss';

const Gits = ({ gits }) => (
  <React.Fragment>
    {gits.map(git => (
      <div className="Gits-profile" key={git.id}>
        <div>
          <div className="data">
            <span className="created-date">{formatDate(git.created_at, 'MMMM MM/ YYYY')}•</span>
            <span className="diff-date">{`${monthDifference(git.created_at)} months ago`}</span>
          </div>
          <span className="description">{git.description}</span>
        </div>
        <span>
          <Link to={`/${git.id}`}>READ</Link>
        </span>
      </div>
    ))}
  </React.Fragment>
);

export default Gits;
