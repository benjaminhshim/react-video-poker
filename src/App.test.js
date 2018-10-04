import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';

import App from './App';
import AppContainer from './AppContainer';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('should expect 52 cards in deck', () => {
    const tree = mount(<AppContainer />);
    expect(tree.state('deck')).toHaveLength(52);
})