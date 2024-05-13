import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: true
        };
    }
    componentDidMount() {
        this.hideTimeout = setTimeout(() => {
            this.setState({ showMessage: false });
        }, 3000);
    }
    componentWillUnmount() {
        clearTimeout(this.hideTimeout);
    }
    render() {
        return (
            <>
                <div>
                    {this.state.showMessage && (<h2> Welcome to Our Competition World </h2>)}
                </div>
            </>
        )
    }
}

export default Home
