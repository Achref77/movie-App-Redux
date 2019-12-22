import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
      loading: true
    };
  }

  componentDidMount() {
    const { listMovi } = this.props;
    listMovi.map(e => {
      if (e.index.toString() === this.props.match.params.id) {
        this.setState({ loading: false, movie: e });
      }
    });
  }

  render() {
    return this.state.loading ? (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div>
        {" "}
        <div className="imglien">
          <img className="log" src={this.state.movie.imgfilm} />
          <div className="descrp" style={{ alignItems: "center" }}>
            <p style={{ color: "black", textAlign: "center", width: "100%" }}>
              {this.state.movie.name}
            </p>
          </div>
          <div>
            <StarRatings
              className="star"
              rating={Number(this.state.movie.rate)}
              starDimension={"15px"}
              starSpacing={"1px"}
              starRatedColor="blue"
              changeRating={newRating => console.log()}
              numberOfStars={5}
              name="rating"
            />
    
           
          </div>
          <iframe width="560" height="315" src={this.state.movie.boton} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};
export default connect(mapStateToProps, null)(App);
