import React from 'react';

/*
* InitialStates: 初始化状态组件
* react 初始化的阶段每个内置的api函数是如何执行的
* @static defaultProps(es6语法) == getDefaultProps，初始化组件属性默认值
* 注意: 对React开发者而言，static成员在IE10及之前版本不能被继承，而在IE11和其它浏览器上可以，这有时候会带来一些问题。
* React Native开发者可以不用担心这个问题
*
* @ constructor(props) state(es6语法) == getInitialState，初始化组件state默认值；
* @ componentWillMount ==> render之前运行，也是在render之前唯一一次机会修改state状态；
* @ componentDidMount ==> render并渲染完成DOM之后，被调用，可以修改state的状态;
*/
class InitialStates extends React.Component {
    getDefaultProps() {
        console.log('@getDefaultProps',1);
        return {name: 'Tom'}
    }

    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
        console.log('initialState',2);
    }
    componentWillMount() {
        console.log('componentWillMount',3);
        this.setState({
            ready: true
        });
    }

    render() {
        console.log("@render",4);
        return (
            <div>
                Initial States test! {this.props.name ? this.props.anme : 'hehe'}
                <br/>
                {'' + this.state.ready}
            </div>
        )
    }
    componentDidMount() {
        console.log('@componentDidMount',5);
    }
};

module.exports = InitialStates;
