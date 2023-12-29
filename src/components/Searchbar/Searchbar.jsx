import React from 'react';
import { Formik, Form, Field } from 'formik';
import css from '../Searchbar/Searchbar.module.css';

const initialValues = {
  queryImg: '',
};

const Searchbar = ({ addStateImg }) => {
  const handleOnSubmit = async (values, actions) => {
    const { queryImg } = values;
    addStateImg(queryImg);
    actions.resetForm();

    console.log(queryImg);
  };

  return (
    <>
      <header className={css.Searchbar}>
        <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
          <Form className={css.SearchForm}>
            <button type="submit" className={css.SearchFormBtn}>
              <span className={css.SearchFormButtonLabel}></span>
            </button>

            <Field
              className={css.SearchFormInput}
              type="text"
              name="queryImg"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </Formik>
      </header>
    </>
  );
};

export default Searchbar;
