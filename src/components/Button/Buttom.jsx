import React from 'react';
import css from '../Button/Button.module.css';

const Button = ({ loadMore, isLoading }) => {
  return (
    <>
      <div className={css.container}>
        <button
          type="button"
          className={css.button}
          onClick={loadMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </>
  );
};

export default Button;
