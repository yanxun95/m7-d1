import React from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  favorites: state.favorite.companies,
});

function Favorites({ favorites }) {
  return (
    <div>
      <ListGroup>
        {favorites.map((company) => (
          <ListGroup.Item style={{ color: "black" }}>
            {company.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default connect(mapStateToProps)(Favorites);
