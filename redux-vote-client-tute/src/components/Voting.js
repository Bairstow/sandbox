import React from 'react';
import rh from 'react-hyperscript';

export default React.createClass({
  getPair: () => { return this.props.pair || []; },
  render: () => {
    return (
      rh('div', { className: "voting" },
        this.getPair().map((entry) => {
          return (
            rh('button', { key: entry }, [
              rh('h1', entry)
            ])
          );
        })
      )
    );
  }
});
