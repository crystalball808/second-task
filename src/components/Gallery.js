import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Modal from './Modal';
import './Gallery.scss';
import photo_1 from '../img/1.jpg';
import photo_2 from '../img/2.jpg';
import photo_3 from '../img/3.jpg';
import photo_4 from '../img/4.jpg';
import photo_5 from '../img/5.jpg';
import photo_6 from '../img/6.jpg';
import photo_7 from '../img/7.jpg';
import photo_8 from '../img/8.jpg';
import photo_9 from '../img/9.jpg';
import photo_10 from '../img/10.jpg';
import photo_11 from '../img/11.jpg';
import photo_12 from '../img/12.jpg';

const initialPictureList = [
  {
    id: '1',
    photo: photo_1,
  },
  {
    id: '2',
    photo: photo_2,
  },
  {
    id: '3',
    photo: photo_3,
  },
  {
    id: '4',
    photo: photo_4,
  },
  {
    id: '5',
    photo: photo_5,
  },
  {
    id: '6',
    photo: photo_6,
  },
  {
    id: '7',
    photo: photo_7,
  },
  {
    id: '8',
    photo: photo_8,
  },
  {
    id: '9',
    photo: photo_9,
  },
  {
    id: '10',
    photo: photo_10,
  },
  {
    id: '11',
    photo: photo_11,
  },
  {
    id: '12',
    photo: photo_12,
  },
];

export default function Gallery() {
  const [picturesList, setPicturesList] = useState(initialPictureList);
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [isModalActive, setIsModalActive] = useState(false);
  const [activePicture, setActivePicture] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  const openPictureModal = (picture) => {
    setActivePicture(picture);
    setIsModalActive(true);
  };

  return (
    <>
      <header>
        <h1>Images: {picturesList.length}</h1>
        <h1>{currentTime.format('DD.MM.YYYY hh:mm A')}</h1>
      </header>
      <div className='gallery'>
        {picturesList.map((picture) => {
          return (
            <div
              className='image-wrapper'
              key={picture.id}
              onClick={() => {
                openPictureModal(picture);
              }}
            >
              <img className='image' src={picture.photo} alt='item' />
            </div>
          );
        })}
      </div>
      <button
        className='button-undo'
        onClick={() => {
          setPicturesList(initialPictureList);
        }}
      >
        Восстановить
      </button>
      {isModalActive ? (
        <Modal
          picture={activePicture}
          setIsModalActive={setIsModalActive}
          picturesList={picturesList}
          setPicturesList={setPicturesList}
        />
      ) : (
        <></>
      )}
    </>
  );
}
