const style = {};

// container
style.galleryContainer = (backgroundColor) => {
    return {
        position: 'relative',
        border: '1px solid grey',
        height: '100%',
        width: '100%',
        backgroundColor: backgroundColor || 'grey',
        overflow: 'hidden'
    };
};

// content
style.galleryContent = {
    width: '300%',
    height: '100%',
    left: '-100%',
    position: 'relative'
};

// img
style.galleryImg = {
    objectFit: 'contain',
    display: 'inline-block',
    height: '100%',
    width: '100%'
};

export default style;
