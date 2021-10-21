import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { removeCompanyFromFavorite } from "../actions";

const mapStateToProps = (state) => ({
  favorites: state.favorite.companies,
});

// mapDispatchToProps is a function returning an object
const mapDispatchToProps = (dispatch) => ({
  // we need a way of adding the selectedBook to the cart products array
  delFromFav: (index) => {
    dispatch(removeCompanyFromFavorite(index));
  },
});

function Favorites({ favorites, delFromFav }) {
  return (
    <div>
      <ListGroup>
        {favorites.map((company, i) => (
          <ListGroup.Item style={{ color: "black" }}>
            {company.title}
            <Button
              variant="primary"
              style={{ marginLeft: "1rem" }}
              onClick={() => delFromFav(i)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
