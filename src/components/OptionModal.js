import React from 'react';
import Modal from 'react-modal';

// onRequestClose ==> accepts a function that closes the modal when you click on esc key or
// anywhere outside the modal
Modal.setAppElement('#app');
const OptionModal = (props) => (
  <Modal
    isOpen = {!!props.selectedOption}
    contentLabel = "Selected Option"
    onRequestClose={props.closeModal}
    closeTimeoutMS={700}
    className="modal"
  >
    <h1 className="modal__title">Selected Item</h1>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button
    className="button"
      onClick={props.closeModal}
    >
      Close Modal
    </button>
  </Modal>
);

export default OptionModal;