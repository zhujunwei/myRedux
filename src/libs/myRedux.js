/**
 * Redux 核心api
 * createStore
 * getState
 * subscribe
 * dispatch
 */

export function createStore(reducer) {
  let currentState = {}; //当前状态
  let currentListeners = []; //监听器

  //获取当前应用的状态
  function getState() {
    return currentState;
  }

  /**
   * 
   * @param {*} listener 
   */
  function subscribe(listener){
    if(typeof listener !== "function"){
      return new TypeError("not a function")
    }
    currentListeners.push(listener)
  }

  /**
   * 
   * @param {*} action 
   */
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(e=>e());
    return action;
  }

  //手动初始化
  dispatch({type: '@thisismyredux'})

  return {getState, subscribe, dispatch}
}
/**
 * 把{xx, yy}
 * xx(参数)
 * 变成dispatch(xx(参数))
 * @param {*} creator 
 * @param {*} dispatch 
 */
function bindActionCreator(creator, dispatch){
  return (...args) => dispatch(creator(...args));
}

//creators {xx, yy}
export const bindActionCreators = (creators, dispatch) => {
  let bound = {};
  Object.keys(creators).forEach(v => {
    let creator = creators[v];
    bound[v] = bindActionCreator(creator, dispatch)
  })

  return bound;
}