import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  return (
    <>
      <Link to={`/company/${job.company_name}`}>
        <Button>{job.title}</Button>
      </Link>
    </>
  );
};

export default SingleJob;
