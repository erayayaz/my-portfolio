import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from './portfolio';
import { shallow } from "enzyme";

test('renders learn react link', () => {
  render(<Portfolio />);
  expect(1).toBe(1);
});

test('renders the heading', () => {
  const wrapper = shallow(<Portfolio />);
  expect(wrapper.find('h1').text()).toBe('Galatasaray');
});