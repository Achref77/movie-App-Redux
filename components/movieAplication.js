import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav.js';
import Nv from './nav.css';
import ListMovi from './ListMovi.js';
import Descritionap from './ListMovi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalExample from './modal';

function movieAplication(props) {
    return (
        <div>
          <Nav/> 
          <ListMovi/> 
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
      list: state
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
    //   changeHandler: (payload) => dispatch(changeHandler(payload)),
    //   addTodo: () => dispatch(addTodo()),
    //   completeTodo: (i) => dispatch(completeTodo(i)),
    //   deletes: (i) => dispatch(deletes(i)),
    //   edit: (i) => dispatch(edit(i))
    }
  }
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(movieAplication)