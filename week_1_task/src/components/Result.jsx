import React from "react";
import { useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";
const Result = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="container mt-5">
      <Alert variant="success">
        {/* <Alert.Link href="#">an example link</Alert.Link>. Give it a click if */}
        Form Submitted Successfully
      </Alert>
      <h5>Your Details are:</h5>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};
export default Result;
