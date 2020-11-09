import React, { Component } from "react";

import Button from "react-bootstrap/Button";

import styles from "./primary-cta.module.scss";

export default class PrimaryCTA extends Component {
  render() {
    const {
      style,
      variant,
      size,
      href,
      onClick,
      type,
      disabled,
      className,
    } = this.props;
    return (
      <Button
        aria-label="button"
        style={style}
        {...this.props}
        {...{ size, variant, href, onClick, type, disabled, className }}
      >
        {this.props.children}
      </Button>
    );
  }
}
