import React, { useState } from "react";

const LabelCheck = ({ onLabel, offLabel }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <label htmlFor="test" data-testid="label">
        <input
          data-testid="input"
          type="checkbox"
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
        {checked ? onLabel : offLabel}
      </label>
    </div>
  );
};

export default LabelCheck;
