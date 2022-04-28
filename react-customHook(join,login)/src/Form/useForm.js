import { useState, useEffect } from 'react';
import { autoHyphen } from '../util/autoHyphen';

const useForm = (defaultValue, validate, confirmSubmit) => {
  const [values, setValues] = useState(defaultValue);
  const [submit, setSubmit] = useState(false);
  const [errors, setError] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userMobile') {
      const modifiedValue = autoHyphen(value);
      setValues({ ...values, [name]: modifiedValue })
    } else {
      setValues({ ...values, [name]: value })
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
    setError(validate(values));
  }

  useEffect(() => {
    const init = async () => {
      if (submit) {
        if (Object.keys(errors).length === 0) {
          confirmSubmit(values);
        }
        setSubmit(false);
      }
    };
    init();
  }, [errors]);

  return {
    ...Object.keys(defaultValue).reduce((acc, cur) => {
      acc[cur] = {
        value: values[cur],
        onChange
      }
      return acc;
    }, {}),
    submitHandler,
    errors,
    submit,
  }

}

export default useForm