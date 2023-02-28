import React from 'react';
import '../../../styles/MessagePopup.css';

export default function MessagePopup() {
  let msg = '';
  let isHidden = 'hidden';

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{msg}</h1>
    </div>
  );
}
