import React, { Component } from 'react';
import css from '../Modal/Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    const { onClose } = this.props;

    if (e.code === 'Escape') {
      onClose();
    }
  };

  hendleBackdropClick = event => {
    const { onClose } = this.props;

    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  render() {
    const { imgData } = this.props;
    console.log(imgData);
    const { src, alt } = imgData.target;

    return createPortal(
      <div className={css.overlay} onClick={this.hendleBackdropClick}>
        <div className={css.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
