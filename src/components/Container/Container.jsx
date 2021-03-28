import React, { Component } from 'react';
import style from './Container.module.css';

class Container extends Component {
  render() {
    const { children } = this.props;
    return <div className={style.container}>{children}</div>;
  }
}

export default Container;
