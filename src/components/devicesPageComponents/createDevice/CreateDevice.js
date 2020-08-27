import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { DeviceContext } from '../../../context/device/DeviceContext';
import CreateDeviceForm from '../../common/customForm/CustomForm';
import CreateDeviceInput from '../../common/input/Input';
import CreatdDeviceBtn from '../../common/customButton/CustomButton';
import CreateDeviceError from '../../common/formError/FormError';
// import CreateDeviceSuccess from '../../common/success/Success';

const CreateDevice = () => {
  const deviceContext = useContext(DeviceContext);
  const { createDevice } = deviceContext;
  // const history = useHistory()

  const schema = yup.object().shape({
    device_model: yup
      .string()
      .min(3, 'Device model must be at least 3 characters!')
      .max(255, 'Device model must be 255 maximum!')
      .trim()
      .required('Device model is required'),
    serial_number: yup
      .string()
      .min(6, 'Serial number must be at least 6 characters!')
      .max(255, 'Serial number must be 255 maximum!')
      .trim()
      .required(),
    os: yup
      .string()
      .min(3, 'OS must be at least 3 characters!')
      .max(128, 'OS must be 128 maximum!')
      .trim()
      .required('OS is required'),
    brand: yup
      .string()
      .min(3, 'Brand must be at least 3 characters!')
      .max(128, 'Brand must be 128 maximum!')
      .trim()
      .required('Brand is required'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    createDevice(data);
  };

  return (
    <CreateDeviceForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <CreateDeviceInput
          type="text"
          name="device_model"
          error={errors.device_model ? true : false}
          placeholder="Device model"
          ref={register}
        />
        {errors.device_model && (
          <CreateDeviceError message={errors.device_model.message} />
        )}
      </div>
      <div>
        <CreateDeviceInput
          type="text"
          name="serial_number"
          error={errors.serial_number ? true : false}
          placeholder="Serial number"
          ref={register}
        />
        {errors.serial_number && (
          <CreateDeviceError message={errors.serial_number.message} />
        )}
      </div>
      <div>
        <CreateDeviceInput
          type="text"
          name="os"
          error={errors.os ? true : false}
          placeholder="os"
          ref={register}
        />
        {errors.os && <CreateDeviceError message={errors.os.message} />}
      </div>
      <div>
        <CreateDeviceInput
          type="text"
          name="brand"
          error={errors.brand ? true : false}
          placeholder="brand"
          ref={register}
        />
        {errors.brand && <CreateDeviceError message={errors.brand.message} />}
      </div>
      <CreatdDeviceBtn contact type="submit" text="Create Device" />
    </CreateDeviceForm>
  );
};

export default CreateDevice;
