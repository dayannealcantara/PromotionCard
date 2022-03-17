import React from "react";
import './style.css'

const UIButton = ({ children, className, component: Component, theme, ...restProps }) =>{
  return (
    <Component className={`uiButton uiButton--${theme} ${className}`} {...restProps }>
    {children}</Component>
  )
};
UIButton.defaultProps = {
  component: "a",
  className: "",
  theme: "bordeBlue"
}

export default UIButton