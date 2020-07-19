import { useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});

  const onChange = (e) => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, onChange];
};
