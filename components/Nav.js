import React, { Component } from "react";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { filterbyname, changeRating } from "./actions";
import logo from "../components/logo.png";

const Nav = ({ filterbyname, filterbyRate, changeRating, props }) => {
  return (
    <div className="navMovi">
      <img className="logo" src={logo} />

      <input
        type="search"
        id="search"
        placeholder="Search..."
        onChange={e => filterbyname(e.target.value)}
      />

      <StarRatings
        rating={filterbyRate}
        starDimension={"15px"}
        starSpacing={"1px"}
        starRatedColor="blue"
        changeRating={(newRating, name) => changeRating(newRating, name)}
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    filterbyname: payload => dispatch(filterbyname(payload)),
    changeRating: (newRating, name) => dispatch(changeRating(newRating, name))
  };
};
const mapStateToProps = state => {
  return { ...state };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
