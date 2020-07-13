import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

const PostDevice = () => {
  const [form, setValues] = useState({
    device_model: '',
    serial_number: '',
    os: '',
    brand: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...form, [name]: event.target.value });
  };

  onsubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`${process.env.REACT_APP_API}/api/devices/`, form)
      .then((res) => {
        console.log(res.data);
        // props.history.push('/manager-dashboard');
      })
      .catch((err) => {
        console.log('error with posting a new device ', err);
      });
  };

  return (
    <div>
      <form onSubmit={() => onsubmit}>
        <input
          value={form.device_model}
          placeholder={'Enter the device model'}
          onChange={handleChange('device_model')}
        />
        <input
          value={form.serial_number}
          placeholder={'Enter the device serial number'}
          onChange={handleChange('serial_number')}
        />
        <input
          value={form.os}
          placeholder={'Enter the operating system'}
          onChange={handleChange('os')}
        />
        <input
          value={form.brand}
          placeholder={'Enter the brand of the device'}
          onChange={handleChange('brand')}
        />
        <button className="device-creation-button">Create a device</button>
      </form>
    </div>
  );
};

export default PostDevice;
