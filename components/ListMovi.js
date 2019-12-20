import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

import ab from '../components/b.jpg'

function ListMovi(props) {

  return (
    <div className="filmdesc">
      {/* {console.log(listMovi)} */}
      <div className="imgslien">
        {props.listMovi.filter(el =>el.rate ?el.name.toLowerCase().includes(props.filterbyname) && el.rate >= props.filterbyRate :
        el.name.toLowerCase().includes(this.state.filterbyname)).map(el =>
            <div className="imglien">
              <img className="log" src={el.imgfilm} />
              <div className="descrp">
                <div>
                  <p>{el.name}</p>
                </div>
                <a href>
                  <button class="ajou" OnClick={el.boton}><img className="strming" src="https://posabilities.ca/wp-content/uploads/2018/01/youtube.png" /></button>
                </a>
              </div>
              <div>
                <StarRatings className="star"
                  rating={Number(el.rate)}
                  starDimension={'15px'}
                  starSpacing={'1px'}
                  starRatedColor="blue"
                  changeRating={(newRating, name) => props.changeRating(newRating, name, el.index)}
                  numberOfStars={5}
                  name='rating'
                />
              </div>
            </div>
          )}


      </div>
      <div className="descrition">
        <img className="imag" src={ab} />

      </div>
    </div>

  )
}
const mapDispatchToProps = (dispatch) => {
  return {

    //   addTodo: () => dispatch(addTodo()),
    //   completeTodo: (i) => dispatch(completeTodo(i)),
    //   deletes: (i) => dispatch(deletes(i)),
    //   edit: (i) => dispatch(edit(i))
  }
}
const mapStateToProps = (state) => {
  return { ...state }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMovi)