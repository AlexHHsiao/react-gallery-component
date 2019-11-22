# react-gallery-component
A light image gallery component for React app

## Setup

* `npm install react-gallery-component`

```javascript
import GalleryComponent from 'react-gallery-component';

const images = [
    'img_url_1',
    'img_url_2',
    'img_url_3',
    'img_url_4'
];

class App extends React.Component {
  render() {
    return <GalleryComponent imageCollection={images} />;
  }
}
```

## Props

| Property        | Type           | Required | Default | Description | 
| ------------- | ------------- |  ----- | ----- | ----- |
| imageCollection |  array | :white_check_mark: |  | An array of image URL for the image gallery |
| backgroundColor | string | | `grey` | Image container background color when image is not filling the whole container  |
| imageFill | boolean | |`false`| Image is scaled to maintain its aspect ratio or sized to filling the entire image container |
| infinite | boolean | | `false`|Infinite sliding |
| slideTime | number (ms) | | `500`|Sliding time between each image |


```json5
// imageCollection example
[
    'img_url_1',
    'img_url_2',
    'img_url_3',
    'img_url_4'
]
```

## Maintainers
<table>
<tr>
<td align="center">
<a href="https://alexxiao.com/">
<img src="https://avatars1.githubusercontent.com/u/13441254" width="100px;" alt="Alex Xiao"/><br />
<sub><b>Alex Xiao</b></sub>
</a><br />
<a href="#alex-email" title="Email">alex.hongquan.xiao@elliemae.com</a>
</td>
</tr>
</table>

## License
[MIT License](https://github.com/AlexHHsiao/react-gallery-component/blob/master/LICENSE)
