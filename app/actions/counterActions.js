/**
 * Created by ljunb on 16/6/26.
 */
import * as types from './actionTypes';

// 计数程序的加事件
export let increase = ()=> {
    return {
        type: types.INCREMENT
    }
}

// 计数程序的减事件
export let decrease = ()=> {
    return {
        type: types.DECREMENT
    }
}