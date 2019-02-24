import {createStore} from "./libs/myRedux";
import {countNum} from "./reducers/index";

const store = createStore(countNum);

const init = store.getState();
console.log("init" + init)
function listener(){
  const current = store.getState()
  console.log(`现在有 ${current} 个`)
}
// 订阅，每次state修改，都会执行listener
store.subscribe(listener)
// 提交状态变更的申请
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'MINUS' })
store.dispatch({ type: 'MINUS' })