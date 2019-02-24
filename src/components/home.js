import React, { Component } from 'react'
import Left from "./left";
import Right from "./right";
import {connect} from "../libs/my-react-redux";
import {add, minus} from "../actions/index";


export default class Home extends Component {
  render() {
    return (
      <div style={{width: 300, height: 600, margin: "100px auto"}}>
        <Left />
        <Right />
      </div>
    )
  }
}