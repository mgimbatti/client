import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.main}>
        <div className={style.title}>
            &copy;{new Date().getFullYear()} MyHouseApp | Sobre nosotros | Contacto 
      </div>
      <div className={style.disclaimer}>
            MyHouseApp es un proyecto realizado para el bootcamp de programación SoyHenry. Toda la información presentada en esta página es ficticia. 
      </div>
    </div>
  );
}

export default Footer;