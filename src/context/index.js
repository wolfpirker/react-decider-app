import React, { Component } from 'react';

import ReactDOM from 'react-dom';


const MyContext = React.createContext();
class MyProvider extends React.Component {

    state = {
        screen: 0,
        question: ''
    }

    handleGoTo = (value) => {
        this.setState({ screen: value })
    }

    handleQuestion = (value) => {
        this.setState({ question: value })
    }

    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    goTo: this.handleGoTo,
                    question: this.handleQuestion
                }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        );
    }
}

export {
    MyProvider,
    MyContext
}