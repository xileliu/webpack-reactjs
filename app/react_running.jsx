import React from 'react';

/*
* react 运行中的生命周期
* componentWillReceiveProps: 组件的props改变的时，运行此函数
* conponentWillUpdate: 在组件props或者state改变时候调用，并在render渲染DOM之前触发，但不能修改state和props
* componentDidUpdate: 在组件render渲染完成DOM之后触发，
*/
class ChildComponent extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log("@componentWillReceiveProps",1);
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("@componentWillUpdate",2);
    }

    render() {
        console.log(3);
        return (
            <p ref="myText">
                Hello, {this.props.name ? this.props.name : 'World'}
            </p>
        )
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate",4);
    }
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <ChildComponent name={this.state.name} />
                <input className="form-control" type="text" onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
};
module.exports = ParentComponent;
