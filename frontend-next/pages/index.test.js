import React from 'react';
import { shallow } from 'enzyme';

import IndexPage from './index';

describe('default test', () => {
  test('pages/index', () => {
    const wrapper = shallow(<IndexPage />);
    expect(wrapper.find('.test').text()).toEqual('testing');
  });
});
