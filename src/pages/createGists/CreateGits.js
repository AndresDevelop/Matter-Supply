import React, { useState, useContext } from 'react';
import { createGists, data } from '../../api/api';
import StoreContext from '../../components/store/context';
import { CreateGists } from '../../components/store/actions';
import '../../styles/components/_createGits.scss';

const CreateGits = () => {
  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const { dispatch } = useContext(StoreContext);

  const Create = () => {
    const body = data(inputValue, textValue);
    createGists(body).then((value) => {
      dispatch(CreateGists(value.data));
    });
  };
  const handleText = ({ target }) => {
    const { value } = target;
    setTextValue(value);
  };
  const HandleChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };
  return (
    <div className="home-wrapper">
      <div className="header">
        <div className="columns">
          <div className="column">
            <h1 className="home-title">New Post.</h1>
            <p className="home-subtitle">
              Explore the unknown. Uncover what matters. Prototype, test,
              repeat. Combine intuition with evidence. Design with intent and
              build it right.
            </p>
            <form className="form-input">
              <input
                value={inputValue}
                className="title-input"
                placeholder="title"
                onChange={HandleChange}
              />
              <br />
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Text"
                    onChange={handleText}
                    value={textValue}
                  />
                </div>
              </div>
              <button type="button" onClick={Create}>
                <span>Publish</span>
              </button>
            </form>
          </div>
          <div className="column">
            <img
              src="https://a.icons8.com/WbaWpnhV/j4VGSN/background.svg"
              alt="background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGits;
