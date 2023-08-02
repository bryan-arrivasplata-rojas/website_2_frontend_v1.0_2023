import React from "react";
import "./loadingInitComponent.scss";
import ChromeDinoGame from 'react-chrome-dino';

export default function LoadingInit() {
  return (
    <div className="loadingInit-container">
        <div className="container-fluid">
            <div className="row">
                <div className="loading-spinner"></div>
            </div>
            <p>Presionar para jugar mientras carga ...</p>
            <ChromeDinoGame />
        </div>
    </div>
  );
}