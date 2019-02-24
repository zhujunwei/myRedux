import React, { Component } from 'react'
import PropTypes from "prop-types";
import {
  bindActionCreators
} from "./myRedux";
//my-react-redux
//负责链接组件， 给到redux的数据到组件属性里面
/**
 * 1. 接受一个组件, 吧state里的数据放进去，返回一个组件（高阶组件）
 * 2. 订阅组件，更新
 */
export const connect = 
  (mapStateToProps= (state => state), mapDispatchToProps={}) => 
  (WrapperComponent) => {
    return class ConnectComponent extends Component {
      static contextTypes = {
        store: PropTypes.object
      } 
      constructor(props, context){
        super(props, context);
        this.state = {
          props: {}
        }
      }

      componentDidMount() {
        const {store } = this.context;
        store.subscribe(() => this.update());
        this.update();
      }

      update() {
        //获取mapStateToProps， mapDispatchToProps 放入this.props
        const {store} = this.context;
        const stateProps = mapStateToProps(store.getState());
        //store.dispatch(xx) 每个action 用dispatch包了一层
        const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
        this.setState({
          props: {
            ...this.state.props,
            ...stateProps,
            ...dispatchProps
          }
        })
      }

      render(){
        return (
          <WrapperComponent {...this.state.props} />
        )
      }
    }

  }

//provider 把store放到context里面，所有子元素可以获取到
export class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  //为了子元素可以获取到
  getChildContext() {
    return {store: this.store}
  }

  constructor(props, context){
    super(props, context);
    this.store = props.store;
  }

  render() {
    return this.props.children;
  }
}