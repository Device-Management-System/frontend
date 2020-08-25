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
import CreateDeviceSuccess from '../../common/success/Success';

const CreateDevice = () => {
  const deviceContext = useContext(DeviceContext);
  const { createDevice } = deviceContext;
  // const history = useHistory()

  const schema = yup.object().shape({
    device_model: yup.string().min(1).max(255).trim().required(),
    serial_number: yup.string().min(6).max(255).trim().required(),
    os: yup.string().min(1).max(128).trim().required(),
    brand: yup.string().min(1).max(128).trim().required(),
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
          <CreateDeviceError message="Device model is required" />
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
          <CreateDeviceError message="Serial Number is required" />
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
        {errors.os && <CreateDeviceError message="OS is required" />}
      </div>
      <div>
        <CreateDeviceInput
          type="text"
          name="brand"
          error={errors.brand ? true : false}
          placeholder="brand"
          ref={register}
        />
        {errors.brand && <CreateDeviceError message="Brand is required" />}
      </div>
      <CreatdDeviceBtn contact type="submit" text="Create Device" />
    </CreateDeviceForm>
  );
};

export default CreateDevice;
