import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class GalleryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curIndex: 0,
            slideReady: true,
            imageSize: 0,
            contentLeftMargin: -100
        };
    }

    componentDidMount() {
        this.leftImgEle = document.getElementById('leftImage');
        this.rightImgEle = document.getElementById('rightImage');
        this.currentImgEle = document.getElementById('currentImage');

        const { imageCollection } = this.props;
        const imageSize = imageCollection.length;
        this.currentImgEle.src = imageCollection[0] || '';
        this.rightImgEle.src = imageCollection[1] || imageCollection[0] || '';
        this.leftImgEle.src = imageCollection[imageSize - 1] || '';

        this.setState({ imageSize });
    }

    prevImage = () => {
        const { imageSize } = this.state;
        let { slideReady, curIndex, contentLeftMargin } = this.state;
        const { slideTime, imageCollection, infinite } = this.props;

        if ((curIndex > 0 && slideReady) || infinite && imageSize !== 0) {
            slideReady = false;
            let interval = null;
            const move = 100 / (slideTime / 5); // single move with in 5 ms
            // initial left margin is -100, so the min would be 0
            interval = setInterval(() => {
                contentLeftMargin += move;

                if (contentLeftMargin >= 0) {
                    clearInterval(interval);

                    contentLeftMargin = -100;
                    slideReady = true;
                    curIndex = curIndex - 1 < 0 ? imageSize - 1 : --curIndex;
                    this.currentImgEle.src = imageCollection[curIndex];

                    if (curIndex !== 0) {
                        this.leftImgEle.src = imageCollection[curIndex - 1];
                    } else if (curIndex === 0 && infinite) {
                        this.leftImgEle.src = imageCollection[imageSize - 1];
                    }

                    this.rightImgEle.src = imageCollection[curIndex + 1] || imageCollection[0];
                }

                this.setState({
                    contentLeftMargin,
                    slideReady,
                    curIndex
                });
            }, 5);
        }
    };

    nextImage = () => {
        const { imageSize } = this.state;
        let { slideReady, curIndex, contentLeftMargin } = this.state;
        const { slideTime, imageCollection, infinite } = this.props;

        if ((curIndex < imageSize - 1 && slideReady) || infinite && imageSize !== 0) {
            slideReady = false;
            let interval = null;
            const move = 100 / (slideTime / 5); // single move with in 5 ms
            // initial left margin is -100, so the max would be -200
            interval = setInterval(() => {
                contentLeftMargin -= move;

                if (contentLeftMargin <= -200) {
                    clearInterval(interval);

                    contentLeftMargin = -100;
                    slideReady = true;
                    curIndex = curIndex + 1 >= imageSize ? 0 : ++curIndex;
                    this.currentImgEle.src = imageCollection[curIndex];
                    if (curIndex !== imageSize - 1) {
                        this.rightImgEle.src = imageCollection[curIndex + 1];
                    } else if (curIndex === imageSize - 1 && infinite) {
                        this.rightImgEle.src = imageCollection[0];
                    }

                    this.leftImgEle.src = imageCollection[curIndex - 1] || imageCollection[imageSize - 1];
                }

                this.setState({
                    contentLeftMargin,
                    slideReady,
                    curIndex
                });
            }, 5);
        }
    };

    render() {
        const { backgroundColor, imageFill, infinite } = this.props;
        const { slideReady, curIndex, imageSize, contentLeftMargin } = this.state;

        return (
            <div className='galleryContainer' style={{ backgroundColor }}>
                <div className='galleryContent' style={{ marginLeft: `${contentLeftMargin}%` }}>
                    <img alt='' id='leftImage' style={{ objectFit: imageFill ? 'cover' : 'contain' }}/>
                    <img alt='' id='currentImage' style={{ objectFit: imageFill ? 'cover' : 'contain' }}/>
                    <img alt='' id='rightImage' style={{ objectFit: imageFill ? 'cover' : 'contain' }}/>
                </div>

                <button className='btn left' onClick={this.prevImage}
                        disabled={(!slideReady || curIndex === 0) && !infinite || imageSize === 0}>a
                </button>
                <button className='btn right' onClick={this.nextImage}
                        disabled={(!slideReady || curIndex === imageSize - 1) && !infinite || imageSize === 0}>
                    &gt;
                </button>
            </div>
        );
    }
}

GalleryComponent.propTypes = {
    backgroundColor: PropTypes.string,
    imageFill: PropTypes.bool,
    slideTime: PropTypes.number,
    infinite: PropTypes.bool,
    imageCollection: PropTypes.arrayOf(PropTypes.string).isRequired
};

GalleryComponent.defaultProps = {
    backgroundColor: 'grey',
    imageFill: false,
    slideTime: 500,
    infinite: false
};

export default GalleryComponent;
