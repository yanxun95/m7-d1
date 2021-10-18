import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const [companies, setCompanies] = useState([]);
  const { name } = useParams();

  const search = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?company=" + name
      );
      if (response.ok) {
        let result = await response.json();
        setCompanies(result.data);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    search();
  }, []);

  function createMarkup(text) {
    return { __html: text };
  }
  return (
    <>
      {companies.length !== 0 &&
        companies.map((company) => (
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "black" }}>
                {company.company_name}
              </Card.Title>
              <Card.Text style={{ color: "black" }}>
                {}
                <div
                  dangerouslySetInnerHTML={createMarkup(company.description)}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default SingleBook;
