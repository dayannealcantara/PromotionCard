import React from "react";
import  ReactDOM  from "react-dom";
import './style.css'

const portalRoot = document.getElementById('portal-root')

const UIModal = ({children, isOpen, onClickClose}) =>{
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <button  className="ui-botao" type="button" onClick={onClickClose}> X </button>
        {children}
      </div>
    </div>,
    portalRoot,
  )
}

export default UIModal