import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchUsers, selectAllUsers } from "../../redux/userSlice/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import style from "./login.module.css";
// import loginLogo from "../../images/logologo.png";
// import alertify from "alertifyjs";

const SignInAdmin = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [allUsers, setAllUsers] = useState([]);
  // const isDisabled = [userName, password].every(Boolean);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://localhost:3000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllUsers(data);
  //     });
  // }, []);

  // var isLoggedIn = JSON.parse(localStorage.getItem("userID"));

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     return navigate("/signin");
  //   } else {
  //     return navigate("/");
  //   }
  // }, []);
  // const handleSubmit = (e) => {
  //   if (userName && password && isDisabled) {
  //     const user = allUsers.find(
  //       (user) => user.login === userName && user.name === password
  //     );

  //     if (user) {
  //       localStorage.setItem("userID", JSON.stringify(user.id));
  //       alertify.success("Success");
  //       navigate("/");
  //     } else {
  //       console.log("wrong data");
  //       alertify.error("Wrong data");
  //     }
  //   }
  //   e.preventDefault();
  // };
  return (
    <div className="loginContainer">
      {/* <div className="signInBox">
        <div>
          <div className={style.signIn_top}>
            <img
              src={loginLogo}
              className={style.logo}
              alt="AzərEnerji loqosu"
            />
            <h2>"İnformasiya Texnologiyalar şöbəsi" texniki dəstək</h2>
          </div>
          <div className={style.signIn_main}>
            <form className={style.signIn_form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Istifadəçi adini daxil et"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Şifrəni daxil et"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className={style.main_Button}
                type="submit"
                disabled={!isDisabled}
              >
                Daxil ol
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={style.login_footer}>
        <p>© 2022 - Rəqəmsal Texnologiyalar Departamenti</p>
      </div> */}
    </div>
  );
};

export default SignInAdmin;
