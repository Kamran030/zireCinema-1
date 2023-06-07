import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user/userSlice";

function SignInAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();

  // setRemember(false);
  const handleSubmit = (e) => {
    dispatch(addUser(email, password));
    setEmail("");
    setPassword("");
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="signInContainer">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-red-50 mb-3">
                  Please enter your login and password!
                </p>

                <form>
                  <MDBInput
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />

                  {/* <MDBCheckbox
                    checked={remember}
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Remember password"
                  /> */}

                  <MDBBtn size="lg">Login</MDBBtn>
                </form>

                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default SignInAdmin;
