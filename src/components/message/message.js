import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  const refModal = React.useRef();
  function closeModal() {
    const $modal = refModal.current;
    $modal.classList.remove('is-active');
  }
  return (
    message && (
      <div className="modal-error" data-testid="modal">
        <div className="modal is-active" ref={refModal}>
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Sad_face.svg"
                      alt="ImageSad"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Not Found</strong>
                      <br />
                      Try new a new user!!.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <button
            className="modal-close is-large"
            type="button"
            aria-label="close"
            data-testid="button-modal"
            onClick={() => closeModal()}
          />
        </div>
      </div>
    )
  );
};

export default Message;

Message.defaultProps = {
  message: null,
};

Message.propTypes = {
  message: PropTypes.bool,
};
