import React, { Component } from "react";
import Pessoa from "../Pessoa/Pessoa";
import "./Time.css";
import imgThomas from "../assets/images/Thomas.jpg";
import imgSherry from "../assets/images/Sherry Harrison.jpg";
import imgPeggy from "../assets/images/Peggy Hall.jpg";
import imgRussell from "../assets/images/Russell Phillips.jpg";

const Time = () => {
    return (
      <div className="containerTime">
        <h1 className="timeTitulo">Equipe</h1>
        <Pessoa
          foto={imgThomas}
          nome="Thomas Hunter"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit."
        ></Pessoa>
        <Pessoa
          foto={imgSherry}
          nome="Sherry Harrison"
          descricao="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        ></Pessoa>
        <Pessoa
          foto={imgPeggy}
          nome="Peggy Hall"
          descricao="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        ></Pessoa>
        <Pessoa
          foto={imgRussell}
          nome="Russell Phillips"
          descricao="Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo."
        ></Pessoa>
      </div>
    );
}

export default Time