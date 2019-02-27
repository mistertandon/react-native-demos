import React, { Component } from 'react'

const withCounter = (Wrapped) => {

    class WithCounter extends Component {

        constructor(props) {

            super(props);

            this.state = {
                count: 0
            }

            this.incrementCounter = this.incrementCounter.bind(this);
        }

        incrementCounter = () => {

            this.setState(
                (prevState) => ({
                    count: prevState.count + 1
                })
            )
        }

        render() {

            return <Wrapped count={this.state.count} incrementCounter={this.incrementCounter} />
        }
    }

    return WithCounter;

}

export default withCounter;