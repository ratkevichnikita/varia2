import React from 'react';
import classes from './Modal.module.css';

const Modal = ({active, setModal,selectItem}) => {

  const addClassOnElem = () => {
    selectItem()
    setModal(!active)
  }

  return (
    <div className={active ? `${classes.boxModal} ${classes.active}` : `${classes.boxModal}`} >
      <div className={classes.boxModalContent} onClick={event => event.stopPropagation()} >
        <h3>
          Вы подтверждаете свой выбор?
        </h3>
        <p>
          После того, как вы нажмете OK, игрушка станет недоступна для других.
        </p>
        <button className={classes.buttonDefault} onClick={addClassOnElem} >OK</button>
        <button className={classes.buttonSecondary} onClick={() => setModal(!active)}  >Отмена</button>
        <span className={classes.boxModalClose} onClick={() => setModal(!active)} >&#10006;</span>
      </div>

    </div>
  );
};

export default Modal;