const style = {};

// container
style.galleryContainer = (backgroundColor) => {
    return {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: backgroundColor || 'grey'
    };
};

// content
style.galleryContent = (leftMargin) => {
    return {
        width: '300%',
        height: '100%',
        display: 'flex',
        marginLeft: leftMargin
    };
};

// img
style.galleryImg = (imgFill) => {
    return {
        objectFit: imgFill ? 'cover' : 'contain',
        height: '100%',
        width: '33.33%'
    };
};

// button
style.leftBtn = {
    height: '20px',
    width: '30px',
    position: 'absolute',
    display: 'block',
    top: '0',
    bottom: '0',
    margin: 'auto',
    left: '0'
};

style.rightBtn = {
    height: '20px',
    width: '30px',
    position: 'absolute',
    display: 'block',
    top: '0',
    bottom: '0',
    margin: 'auto',
    right: '0'
};

export default style;
