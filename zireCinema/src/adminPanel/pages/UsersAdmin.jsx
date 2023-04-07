import React from "react";
import { useParams } from "react-router";

const UsersAdmin = () => {
  let params = useParams();
  return <div>Admin : {params.username}</div>;
};

export default UsersAdmin;
