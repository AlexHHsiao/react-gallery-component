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

    prevImage = () => {

    };

    nextImage = () => {

    };

    render() {
        const { backgroundColor, imageCollection, imageFill } = this.props;

        return (
            <div style={style.galleryContainer(backgroundColor)}>
                <div style={style.galleryContent}>
                    <img alt='' id='leftImage' style={style.galleryImg(imageFill)}
                         src={imageCollection[0]}/>
                    <img alt='' id='currentImage' style={style.galleryImg(imageFill)}
                         src={imageCollection[0]}/>
                    <img alt='' id='rightImage' style={style.galleryImg(imageFill)}
                         src={imageCollection[0]}/>
                </div>

                <button style={style.leftBtn} onClick={this.prevImage}>a</button>
                <button style={style.rightBtn} onClick={this.nextImage}>&gt;</button>
            </div>
        );
    }
}

GalleryComponent.propTypes = {
    backgroundColor: PropTypes.string,
    imageFill: PropTypes.bool,
    imageCollection: PropTypes.arrayOf(PropTypes.string).isRequired
};

GalleryComponent.defaultProps = {
    backgroundColor: '',
    imageFill: false
};

export default GalleryComponent;
