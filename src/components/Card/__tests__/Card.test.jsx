import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../Card.jsx';

configure({ adapter: new Adapter() });

describe('Card', () => {
 it('should be defined', () => {
   expect(Card).toBeDefined();
 });
});



describe('toggle card hold', () => {
    let card;
    let onToggle;
  
    beforeEach(() => {
      onToggle = jest.fn();
      card = mount(<Card holdCard={onToggle} />);

      test('hold card', () => {
        expect(card.props().holdCard).toBeDefined();
      });
  
    });
    
  });