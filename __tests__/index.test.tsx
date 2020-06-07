import { shallow } from 'enzyme';
import React from 'react';
import StyledText from '../dist';

describe('StyledText', () => {
    it('renders children properly', () => {
        const children = 'Sample Text';
        const component = shallow(
            <StyledText bold center>
                {children}
            </StyledText>
        );
        expect(component.text()).toContain(children);
    });
});
