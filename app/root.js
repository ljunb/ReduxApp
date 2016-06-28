/**
 * Created by ljunb on 16/6/26.
 */
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/config-store'

import CounterContainer from './containers/CounterContainer';

// 程序入口采用该方式连接store
export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterContainer />
            </Provider>
        )
    }
}