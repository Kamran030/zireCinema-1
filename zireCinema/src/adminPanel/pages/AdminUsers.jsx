import React from "react";
import AdminNav from "../adminComponents/AdminNav";
import Table from "react-bootstrap/Table";

const AdminUsers = () => {
  return (
    <div className="adminContainer">
      <AdminNav />
      <div className="container  ">
        <h1>Admin Users</h1>
        <div>
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

export default AdminUsers;
