import React from 'react';
import { shallow } from 'enzyme';
import Sample from '../dist';

describe('Sample', () => {
    it('contains "the greeting" message', () => {
        const component = shallow(<Sample color="green" />);
        expect(component.text()).toContain('Hi Content Creator');
    });
});
