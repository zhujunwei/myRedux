import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from "../libs/my-react-redux";
import {add, minus} from "../actions/index";
@connect(
  state => ({num:state}),
  {add, minus}
)
export default class Right extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={{width: 130, height: 600, margin: "100px auto", border: "1px solid #000", float: "left"}}>
        <h1>右面</h1>
        {this.props.num}
        <br></br>
        <button onClick={() => {
          this.props.add()
        }}>--- +1 ----</button>
        <br></br>
        <button onClick={() => {
          this.props.minus()
        }}>==== -1 ====</button>
      </div>
    )
  }
}