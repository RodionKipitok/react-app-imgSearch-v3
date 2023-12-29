import React from 'react';
import css from './ImageGalleryItem.module.css';
import { nanoid } from 'nanoid';

const ImageGalleryItems = props => {
  return (
    <ul className={css.ImageGallery}>
      {props.queryImg.map(item => (
        <li key={nanoid()} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={item.webformatURL}
            alt={item.tags}
            onClick={props.onOpenModalImg}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItems;
