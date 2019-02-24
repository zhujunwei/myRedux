import React, { Component } from 'react'
import {connect} from "../libs/my-react-redux";
import {add, minus} from "../actions/index";
@connect(
  state => ({num:state}),
  {add, minus}
)
export default class Left extends Component {
  render() {
    return (
      <div style={{width: 150, height: 600, margin: "100px auto", border: "1px solid #000", float: "left"}}>
        <h1>左面</h1>
        {this.props.num}
      </div>
    )
  }
}