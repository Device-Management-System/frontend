import { useState, useEffect } from 'react';

export const useFormPersist = (callback, key, initialState = {}) => {
  const getSavedValues = (key, initialState) => {
    // Get values from localStorage.
    const savedValues = JSON.parse(localStorage.getItem(key));

    if (savedValues) return savedValues;

    // If initialstate a function return.
    if (initialState instanceof Function) return initialState();

    return initialState;
  };

  const [values, setValues] = useState(() => {
    return getSavedValues(key, initialState);
  });

  useEffect(() => {
    // Set values to localStorage.
    localStorage.setItem(key, JSON.stringify(values));
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    callback();
    setValues(initialState);
  };

  return [values, onChange, onSubmit, getSavedValues];
};
