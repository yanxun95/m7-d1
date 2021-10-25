import { Col, Container, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import SingleJob from "./SingleJob";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../actions";

// const mapStateToProps = (state) => ({
//   jobs: state.job.jobList,
//   isError: state.job.isError,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getJobs: (searchQuery) => {
//     dispatch(getJobsAction(searchQuery));
//   },
// });

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const jobs = useSelector((state) => state.job.jobList);
  const isError = useSelector((state) => state.job.isError);

  const dispatch = useDispatch();

  useEffect(() => {
    searchQuery !== "" && dispatch(getJobsAction(searchQuery));
    console.log(jobs);
  }, [searchQuery]);

  return (
    <Container>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Row>
        {jobs.length !== 0 &&
          jobs.map((result) => (
            <Col xs={3} key={result._id}>
              <SingleJob job={result} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Search;
