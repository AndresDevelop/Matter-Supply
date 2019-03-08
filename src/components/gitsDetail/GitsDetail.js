import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../../styles/components/_gitDetail.scss';
import { formatDate, monthDifference } from '../../utils/date';

const GitsDetail = ({ gitData }) => {
  const [contentValue, setContent] = useState('');

  useEffect(() => {
    const key = Object.keys(gitData.files).shift();
    const { content } = gitData.files[key];
    setContent(content);
  }, []);
  return (
    <React.Fragment>
      {gitData && (
        <div className="git-detail">
          <div className="data">
            <span className="created-date">
              {formatDate(gitData.created_at, 'MMMM MM/ YYYY')}•
            </span>
            <span className="diff-date">{`${monthDifference(
              gitData.created_at
            )} months ago`}
            </span>
          </div>
          <h1 className="title">{gitData.description}</h1>
          <ReactMarkdown source={contentValue} />
        </div>
      )}
    </React.Fragment>
  );
};

export default GitsDetail;
