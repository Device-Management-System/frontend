import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostDevice = () => {
  const [form, setValues] = useState({
    device_model: '',
    serial_number: '',
    os: '',
    brand: '',
  });

  // clears the form and state after submission
  const clearState = () => {
    setValues({
      device_model: '',
      serial_number: '',
      os: '',
      brand: '',
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...form, [name]: event.target.value });
  };

  //   functions to open and close the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    clearState();
    axiosWithAuth()
      .post(`${process.env.REACT_APP_API}/api/devices/`, form)
      .then((res) => {
        console.log(res.data);
        handleClose();
      })
      .catch((err) => {
        console.log('error with posting a new device ', err);
        window.alert(`there was an error ${err.message}`);
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create a new device
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Form onSubmit={onsubmit} onReset={clearState}>
            <Form.Group controlId="device_model">
              <Form.Label>Enter the device model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter model"
                className="text-muted"
                value={form.device_model}
                onChange={handleChange('device_model')}
              />
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter the serial number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter model"
                name="serial_number"
                value={form.serial_number}
                onChange={handleChange('serial_number')}
              />
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter the operating system</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter operating system"
                className="text-muted"
                value={form.os}
                onChange={handleChange('os')}
              />
              <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter the brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter band name"
                className="text-muted"
                value={form.brand}
                onChange={handleChange('brand')}
              />
              <Form.Text></Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostDevice;
