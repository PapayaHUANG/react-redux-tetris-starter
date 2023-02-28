import React from 'react';
import '../../../styles/Controls.css';

export default function Controls(props) {
  return (
    <div className="controls">
      {/* left */}
      <button className="control-button">Left</button>
      {/* right */}
      <button className="control-button">Right</button>
      {/* rotate */}
      <button className="control-button">Rotate</button>
      {/* down */}
      <button className="control-button">Down</button>
    </div>
  );
}
