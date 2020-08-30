import React from "react";

import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

const SavedPage = () => {
  return (
    <div>
      <Jumbotron />
      <Card btnType="btn btn-danger" btnText="Remove" />
    </div>
  );
};

export default SavedPage;
