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
    let { onClose } = this.props;

    if (e.code === 'Escape') {
      onClose();
    }
  };

  hendleBackdropClick = event => {
    let { onClose } = this.props;

    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  render() {
    let { imgData } = this.props;
    console.log(imgData.src);

    return createPortal(
      <div className={css.overlay} onClick={this.hendleBackdropClick}>
        <div className={css.modal}>
          <img src={imgData.src} alt={imgData.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
