/**
 * Created by ljunb on 16/6/26.
 */
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../pages/Counter';

// CounterContainer是容器组件,对应包裹着Counter
class CounterContainer extends React.Component {
    render() {
        return (
            <Counter {...this.props}/>
        )
    }
}

// 通过该函数分拣出Counter对应的子状态树,即是rootReducer中的counter
// dispatch和子状态树counter将以props的形式传入Counter,Counter可通过counter.count访问到对应的state

let mapStateToProps = (state)=> {
    const { counter } = state;
    return { counter };
}

export default connect(mapStateToProps)(CounterContainer);