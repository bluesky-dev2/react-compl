import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from '../utils/styles';

class Item extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    nativeEvent: PropTypes.object,
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    onClick: PropTypes.func,
    data: PropTypes.any
  };

  static defaultProps = {
    className: null,
    style: {},
    disabled: false,
    onClick: () => {},
    nativeEvent: {},
    data: null,
  };

  disabled = false;

  handleClick = e => {
    this.disabled
      ? e.stopPropagation()
      : this.props.onClick({
          event: this.props.nativeEvent,
          data: this.props.data
        });
  };

  render() {
    const {
      className,
      disabled,
      style,
      children,
      data,
      nativeEvent
    } = this.props;

    this.disabled =
      typeof disabled === 'function'
        ? disabled({
            event: nativeEvent,
            data: data,
          })
        : disabled;

    const cssClasses = cx(styles.item, className, {
      [`${styles.itemDisabled}`]: this.disabled
    });

    return (
      <div
        className={cssClasses}
        style={style}
        onClick={this.handleClick}
        role="presentation"
      >
        <div className={styles.itemContent}>{children}</div>
      </div>
    );
  }
}

export default Item;
