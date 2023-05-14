import React from "react";
import { Spinner } from "react-bootstrap";

export function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="spinner-border text-light" role="status">
        <Spinner animation="border" role="status" variant="light"></Spinner>
      </div>
    </div>
  );
}
