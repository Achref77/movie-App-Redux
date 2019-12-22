import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import Edite from "./Edite.js";
import { deletes, Rating } from "./actions";
import StarRatings from "react-star-ratings";
import ModalExample from "./modal";

function ListMovi(props) {
  console.log("props", props.history);
  return (
    <div className="imgslien">
      {props.listMovi
        .filter(el =>
          el.rate
            ? el.name.toLowerCase().includes(props.filterbyname) &&
              el.rate >= props.filterbyRate
            : el.name.toLowerCase().includes(this.state.filterbyname)
        )
        .map((el, i) => (
          <div className="imglien">
            <img className="log" src={el.imgfilm} />
            <div className="descrp">
              <div>
                <p>{el.name}</p>
              </div>
              <button
                class="ajou"
                onClick={() => props.history.push(`/movie/${el.index}`)}
              >
                <img
                  className="strming"
                  src="https://posabilities.ca/wp-content/uploads/2018/01/youtube.png"
                />
              </button>
            </div>
            <div>
              <StarRatings
                className="star"
                rating={Number(el.rate)}
                starDimension={"15px"}
                starSpacing={"1px"}
                starRatedColor="blue"
                changeRating={newRating => console.log()}
                numberOfStars={5}
                name="rating"
              />
            </div>
            <Edite index={i} />
            <button className="btnlist" onClick={() => props.deletes(i)}>
              remove
            </button>
          </div>
        ))}

      <ModalExample />
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    deletes: i => dispatch(deletes(i)),
    Rating: (x, y) => dispatch(Rating(x, y))
  };
};
const mapStateToProps = state => {
  return { ...state };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovi);
