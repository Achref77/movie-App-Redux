import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return <div>404 notfound</div>;
  }
}

export default App;
