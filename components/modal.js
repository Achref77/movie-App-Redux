import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import {addMovie } from "./actions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      name: ""
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  handlechange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <button className="btnlist" onClick={this.openModal}>
          Ajouter
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <input class="ground"id="imgfilm"type="text" placeholder="imgfilm..."name="url"onChange={this.handlechange}/>

           <input class="ground"id="name"type="text"placeholder="name..."name="name"onChange={this.handlechange}/>

           
           <button class="ajou">"removefilm"</button>
           
           <input class="ground" id="rate" type="number" max="5" placeholder="rates..." name="rate" onChange={this.handlechange} /> 

          <button className="btn btn-outline-dark" onClick={this.closeModal}>
            close
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => this.props.addMovie(this.state)}
          >
            Add newmovie
          </button>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addMovie: payload => dispatch(addMovie(payload))
});
export default connect(null, mapDispatchToProps)(App);
