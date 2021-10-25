import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeCompanyFromFavorite } from "../actions";

function Favorites() {
  const favorites = useSelector((state) => state.favorite.companies);
  const dispatch = useDispatch();
  return (
    <div>
      <ListGroup>
        {favorites.map((company, i) => (
          <ListGroup.Item style={{ color: "black" }}>
            {company.title}
            <Button
              variant="primary"
              style={{ marginLeft: "1rem" }}
              onClick={() => dispatch(removeCompanyFromFavorite(i))}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Favorites;
