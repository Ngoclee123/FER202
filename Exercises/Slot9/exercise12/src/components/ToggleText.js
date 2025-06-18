import React, { useState } from 'react';

function ToggleText() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Text
      </button>
      {visible && <p>This is the toggled text!</p>}
    </div>
  );
}

export default ToggleText;