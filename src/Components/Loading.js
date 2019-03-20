import React, { Component } from 'react';
import loading from'../img/loading.gif';

class Loading extends Component {
    render () {
        return (
            <p><img src={loading} alt="Loading"/></p>
        )
    }
}

export default Loading;