import React, { useEffect, useState } from "react";
import AdminNav from "../adminComponents/AdminNav";
import { Button, Form, FormGroup, Modal, Table } from "react-bootstrap";
const AdminAddFilm = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.title = "Admin Panel";
  });
  return (
    <div className="adminContainer">
      <AdminNav />
      <div className="container ">
        <div className="adminPageHeader">
          <h1 className="text-primary">Films</h1>
          <Button variant="primary" onClick={() => setShow(true)}>
            Add New Film
          </Button>
        </div>

        <Modal
          backdrop={false}
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-70w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              New Film information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-light">
              <Form className="adminAddFilmForm">
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Filmin adı</Form.Label>
                  <Form.Control type="text" placeholder="Titanic" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Ölkə</Form.Label>
                  <Form.Control type="text" placeholder="ABŞ" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Dil</Form.Label>
                  <Form.Control type="text" placeholder="Azərbaycan" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Filmin buraxılış tarixi</Form.Label>
                  <Form.Control type="number" placeholder="2023" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Filmin müddəti </Form.Label>
                  <Form.Control type="number" placeholder="120" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Filmin Rejissoru </Form.Label>
                  <Form.Control type="text" placeholder="Name Surname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Rollarda </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <h5 className="text-primary mx-2">Film cədvəli </h5>
                  <FormGroup>
                    <Form.Label>Başladı</Form.Label>
                    <Form.Control type="date" />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label>Bitdi </Form.Label>
                    <Form.Control type="date" />
                  </FormGroup>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Film poster image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="filmName.ControlInput1">
                  <Form.Label>Filmin youtube trailleri </Form.Label>
                  <Form.Control type="url" placeholder="https://example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="filmDescription.ControlTextarea1"
                >
                  <Form.Label>Film haqqında məlumat</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                  />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="container">
        <div className="adminPageTable">
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminAddFilm;
