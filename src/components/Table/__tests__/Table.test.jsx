import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from '../Table.jsx';

configure({ adapter: new Adapter() });

describe('Table', () => {
 it('should be defined', () => {
   expect(Table).toBeDefined();
 });


});