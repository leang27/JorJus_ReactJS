import React, { Component } from 'react';

class ComingSoon extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.match.url} is Coming Soon!!!</h3>
            </div>
        );
    }
}

export default ComingSoon;