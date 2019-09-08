import GalleryComponent from '../src/index.js';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('BaseButton', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<GalleryComponent />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});
