import { Col, Container, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import SingleJob from "./SingleJob";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const search = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" + searchQuery
      );
      if (response.ok) {
        let result = await response.json();
        setSearchResult(result.data);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchQuery !== null && search();
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
        {searchResult.length !== 0 &&
          searchResult.map((result) => (
            <Col xs={3} key={result._id}>
              <SingleJob job={result} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Search;
