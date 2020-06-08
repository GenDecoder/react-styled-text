import { shallow } from 'enzyme';
import React from 'react';
import StyledText from '../dist';

describe('StyledText', () => {
    it('renders text properly', () => {
        const text = 'Sample Text';
        const component = shallow(
            <StyledText bold center>
                {text}
            </StyledText>
        );
        expect(component.text()).toBe(text);
    });
    it('renders with passed "tag"', () => {
        const component = shallow(<StyledText tag="h1" />);
        expect(component.find('h1').length).toBe(1);
    });
    it('renders left space', () => {
        const component = shallow(<StyledText tag="h1" hasLeftSpace />);
        expect(component.find('span').length).toBe(1);
    });
    it('renders right space', () => {
        const component = shallow(<StyledText tag="h1" hasRightSpace />);
        expect(component.find('span').length).toBe(1);
    });
    it('renders indent spaces', () => {
        const component = shallow(<StyledText tag="h1" indent />);
        expect(component.find('span').length).toBe(4);
    });
    it('renders indent spaces based on tabSize', () => {
        const component = shallow(<StyledText tag="h1" indent tabSize={10} />);
        expect(component.find('span').length).toBe(10);
    });
});
