/**
 * Created by ljunb on 16/6/26.
 */
import * as types from '../actions/actionTypes';

// 声明组件需要的state
const initialState = {
    count: 0,
}

// 在该函数返回对state的处理结果,注意不能修改原state,一般通过Object.assign来返回一个新的副本
// initialState为初始state,action参数为匹配到的action,必定有type属性,可以携带其他要素
// 无匹配情况为default,一定要返回state

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case types.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        default:
            return state
    }
}