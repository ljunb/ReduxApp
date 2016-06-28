/**
 * Created by ljunb on 16/6/26.
 */
import counter from './counter';
import { combineReducers } from 'redux';

// 通过combineReducers联结所有的reducer,并导出给外部使用
// 该名字决定了分拣子状态树的名字,要相对应
export default rootReducer = combineReducers({
    counter
})