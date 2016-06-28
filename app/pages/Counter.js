/**
 * Created by ljunb on 16/6/26.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Navigator,
} from 'react-native';

// 因为是手动分发,需要导入响应的action,按需以dispatch(increase())或dispatch(decrease())的方式分发
import {
    increase,
    decrease,
} from '../actions/counterActions';

export default class Counter extends React.Component {
    render() {

        // 采用对象解构的方式获得dispatch和子状态树counter
        // 就可以通过dispatch来手动分发action,以及操作counter的state数据count
        const {dispatch, counter} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>dispatch(decrease())}
                >
                    <Text>-</Text>
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text>{counter.count}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>dispatch(increase())}
                >
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    },

    button: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    }
})