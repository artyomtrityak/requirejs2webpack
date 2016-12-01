define((require) => {
  'use strict';

  const React = require('react');


  return React.createClass({
    render() {
      const items = [
        {
          link: 'home',
          isIcon: true,
          iconClass: 'back'
        },
        {
          displayName: this.props.displayName
        }
      ];

      return (
        <div>React bar {this.props.displayName}</div>
      );
    }
  });
});