import React from 'react';
import Viewport from "./viewport.component";
import './home.style.scss';
import '@styles';

export default function Home() {

  function getCanvas() {
    return (<Viewport/>);
  }

  return (
    <div className="home flex-layout column">
      <div className="main-top flex flex-layout row">
        <div className="viewport-wrapper flex">
          {getCanvas()}
        </div>
        <div className="plane-list-wrapper">
          {/* Plane lists */}
        </div>
      </div>
      <div className="main-bottom flex-layout column">
        <div className="console-log-wrapper flex">{/* Console log */}</div>
        <div className="console-input-wrapper">{/* Console input */}</div>
      </div>
    </div>
  );
}
