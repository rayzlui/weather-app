import React from 'react';
import { shallow } from 'enzyme';
import { RootView } from './rootView';

describe('RootView', () => {
  describe('true passed as prop', () => {
    const wrapper = shallow(<RootView intro={true} />);
    it('should have classname container and container--intro', () => {
      const className = wrapper.find('.container');
      expect(className).toHaveLength(1);
      const introContainer = wrapper.find('.container--intro');
      expect(introContainer).toHaveLength(1);
    });
  });

  describe('false props passed', () => {
    const wrapper = shallow(<RootView intro={false} />);
    it('should not have container intro class', () => {
      const className = wrapper.find('.container');
      expect(className).toHaveLength(1);
      const introContainer = wrapper.find('.container--intro');
      expect(introContainer).toHaveLength(0);
    });
  });
});
