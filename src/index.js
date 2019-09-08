import React, { Component } from 'react';

class GalleryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <button disabled={true}>Click me</button>
            </div>
        );
    }
}

export default GalleryComponent;
