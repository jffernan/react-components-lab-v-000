import React from 'react';
import ReactDOM from 'react-dom';

export class OlderCoaster extends React.Component {
  render(){
    return React.createElement('div', {className: 'oldercoaster'},
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),

      React.createElement('ul', {},
        [
          React.createElement('li', {key: 0}, 'Agnes'),
          React.createElement('li', {key: 1}, 'Muriel')
        ]
      )
    )
  }
};

export class InFrontOfYou extends React.Component {
  render(){
    return React.createElement('div', {},
      React.createElement('p', {}, 'You shouldn\'t look too far.'),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
    )
  }
};

export class ButcherShop extends React.Component {
  render(){
    return React.createElement('div', {className: 'butcher-shop'},
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {},
        [
          React.createElement('li', {key: 0}, 'Tenderloin'),
          React.createElement('li', {key: 1}, 'Short ribs'),
          React.createElement('li', {key: 2}, 'Beef shin'),
          React.createElement('li', {key: 3}, 'Ribeye')
        ]
      )
    )
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
