import React from 'react';
import Portal from './Portal';
import './Modal.scss';

export default function Modal({
  picture,
  setIsModalActive,
  picturesList,
  setPicturesList,
}) {
  const closeModal = () => {
    setIsModalActive(false);
  };

  const deletePicture = () => {
    setPicturesList(
      picturesList.filter(
        (pictureFromList) => pictureFromList.id !== picture.id
      )
    );
    setIsModalActive(false);
  };

  return (
    <Portal>
      <div className='modal-background'>
        <button className='modal-button' onClick={closeModal}>
          Close
        </button>
        <img className='modal-photo' src={picture.photo} alt='item' />
        <button className='modal-button' onClick={deletePicture}>
          X
        </button>
      </div>
    </Portal>
  );
}
