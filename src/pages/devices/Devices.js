import React, { useContext, useEffect } from 'react';
import { DeviceContext } from '../../context/device/DeviceContext';
import CreateDevice from '../../components/devicesPageComponents/createDevice/CreateDevice';

const Devices = () => {
  const deviceContext = useContext(DeviceContext);
  const { devices, getDevices } = deviceContext;

  useEffect(() => {
    getDevices();
    // eslint-disable-next-line
  }, []);

  console.log(devices);
  return (
    <div id="devices">
      <CreateDevice />
    </div>
  );
};

export default Devices;
