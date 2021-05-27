import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from '../ButtonsBar.module.css';
import '../../globalFilters.css';

function EditButtonBar({ rol, handleSubmit, element, id }) {
  return (
    <div className={style.ctn}>
      <div className={style.elementsCtn}>
        <Link to={`/panel/${rol}`} onClick={() => {
           // !window.confirm(`¿Quieres descartar los cambios de ${element} con id ${id}?`) && console.log('no hagas nada');
          }}
        >
          <label>
            <FontAwesomeIcon icon={faArrowLeft} />
            {' Panel'}
          </label>
        </Link>
        <div className={style.btnCtn}>
        <Link to={`/panel/${rol}`} className={style.btnBar} onClick={() => {
           // !window.confirm(`¿Quieres descartar los cambios de ${element} con id ${id}?`) && console.log('no hagas nada');
          }}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
          {' Cancelar'}
        </Link>
          <button type="button" className={style.btnBar} onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSave} />
            {'  Guardar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditButtonBar;
