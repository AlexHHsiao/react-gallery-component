import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class GalleryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // curIndex: 0,
            // slideReady: true
        };
    }

    render() {
        const { background, imageCollection } = this.props;

        return (
            <div style={style.galleryContainer(background)}>
                <div style={style.galleryContent}>
                    <img id='leftImage' alt='' style={style.galleryImg} src={imageCollection[0]}/>
                    <img alt='' id='currentImage' style={style.galleryImg}/>
                    <img alt='' id='rightImage' style={style.galleryImg}/>
                </div>
            </div>
        );
    }
}

GalleryComponent.propTypes = {
    background: PropTypes.string,
    imageCollection: PropTypes.arrayOf(PropTypes.string).isRequired
};

GalleryComponent.defaultProps = {
    background: ''
};

export default GalleryComponent;
