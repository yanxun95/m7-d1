import React from "react";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addCompanyToFavAction } from "../actions";

const mapStateToProps = (state) => ({});

// mapDispatchToProps is a function returning an object
const mapDispatchToProps = (dispatch) => ({
  // we need a way of adding the selectedBook to the cart products array
  addToFav: (company) => {
    dispatch(addCompanyToFavAction(company));
  },
});

const Company = ({ addToFav }) => {
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
      <Link to={`/favorite/`}>
        <Button variant="primary">Go to favorite page</Button>
      </Link>
      {companies.length !== 0 &&
        companies.map((company) => (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "1rem",
              }}
            >
              <Button variant="primary" onClick={() => addToFav(company)}>
                Add to favorite
              </Button>
            </div>
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
          </div>
        ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
